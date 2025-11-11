import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import SegmentControl from "./SegmentControl";
import { getRatingStars, formatDuration } from "../utils/formatters";
import { useRouter } from "expo-router";

const Movie = ({
  id,
  title,
  poster,
  description,
  rating,
  duration,
  isFavorite,
  handleFave,
}) => {
  const router = useRouter();

  return (
    <TouchableOpacity
      onPress={() => router.push(`movie/${id}`)}
      style={styles.container}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignContent: "center",
        }}
      >
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity onPress={handleFave}>
          <Text style={styles.hearts}>{isFavorite ? "❤️" : "🤍"}</Text>
        </TouchableOpacity>
      </View>
      <Image source={{ uri: poster }} style={styles.poster} />
      <Text>{getRatingStars(rating)}</Text>
      <Text>{formatDuration(duration)}</Text>
      <Text style={styles.description}>{description}</Text>
    </TouchableOpacity>
  );
};

export default Movie;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 8,
    elevation: 2,
  },
  hearts: {
    fontSize: 28,
    paddingRight: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  poster: {
    height: 200,
    borderRadius: 8,
    marginVertical: 10,
  },
  description: {
    fontSize: 14,
    color: "#555",
  },
});
