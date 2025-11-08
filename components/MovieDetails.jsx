import {
  Image,
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  Dimensions,
} from "react-native";
import React from "react";
import SegmentControl from "./SegmentControl";
import { getRatingStars, formatDuration } from "../utils/formatters";
import Review from "./Review";

const MovieDetails = ({
  title,
  poster,
  description,
  rating,
  duration,
  reviews,
}) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={styles.rating}>
          ⭐{rating}
          <Text style={{ fontSize: 20, fontWeight: "light" }}>/10</Text>
        </Text>
        <Text style={styles.duration}>{formatDuration(duration)}</Text>
      </View>
      <Image source={{ uri: poster }} style={styles.poster} />
      <Text style={styles.rating}>Summary</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.rating}>Reviews</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={reviews}
        renderItem={({ item }) => <Review {...item} />}
        style={{ height: 200 }}
      />
    </View>
  );
};

export default MovieDetails;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 8,
    elevation: 2,
  },
  reviewsList: {
    paddingHorizontal: 5,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    padding: 10,
  },
  rating: {
    fontSize: 24,
    paddingLeft: 10,
    fontWeight: "bold",
  },
  duration: {
    fontSize: 24,
    paddingRight: 10,
  },
  poster: {
    height: 200,
    marginVertical: 15,
  },
  description: {
    fontSize: 14,
    color: "#555",
    padding: 10,
  },
});
