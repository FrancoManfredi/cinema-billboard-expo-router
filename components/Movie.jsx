import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import SegmentControl from "./SegmentControl";
import { getRatingStars, formatDuration } from "../utils/formatters";
import { useRouter } from "expo-router";

const Movie = ({ title, poster, description, rating, duration }) => {
  const router = useRouter();

  return (
    <TouchableOpacity
      onPress={() => router.push(`movie/${title}`)}
      style={styles.container}
    >
      <Text style={styles.title}>{title}</Text>
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
