import React from "react";
import { Text, View, Image, StyleSheet, Dimensions } from "react-native";

const Review = ({ username, review, rating }) => {
  return (
    <View
      style={{
        padding: 10,
        backgroundColor: "#fff",
        borderRadius: 10,
        elevation: 2,
        margin: 10,
        width: Dimensions.get("window").width - 60,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Image
          source={{
            uri: "https://i.pinimg.com/736x/0d/64/98/0d64989794b1a4c9d89bff571d3d5842.jpg",
          }}
          style={{ width: 80, height: 80, borderRadius: 15 }}
        />
        <View style={{ flexDirection: "column" }}>
          <Text style={{ padding: 5, fontSize: 16 }}>{username}</Text>
          <Text style={styles.rating}>
            ⭐{rating}
            <Text style={{ fontSize: 14, fontWeight: "light" }}>/10</Text>
          </Text>
        </View>
      </View>
      <Text style={{ paddingTop: 10 }}>{review}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  rating: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Review;
