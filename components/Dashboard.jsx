import { Dimensions, StyleSheet, View, Text, FlatList } from "react-native";
import Movie from "../components/Movie";
import AddMovieFloatingButton from "../components/AddMovieFloatingButton";
import SegmentControl from "../components/SegmentControl";
import AddMovieModal from "../components/AddMovieModal";
import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useData } from "../context/DataContext";
import { useFaves } from "../context/FavesContext";
import { useRouter } from "expo-router";

export default function Dashboard() {
  const { movies, categories, loading, fetchData } = useData();
  const { faves, toggleFave } = useFaves();
  const router = useRouter();

  if (loading) {
    return (
      <SafeAreaView>
        <Text>Cargando...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView edges={["top"]} style={{ flex: 1, backgroundColor: "white" }}>
      <FlatList
        data={movies}
        renderItem={({ item }) => (
          <Movie
            {...item}
            isFavorite={faves.some((id) => id === item.id)}
            handleFave={() => toggleFave(item.id)}
          />
        )}
      />

      <AddMovieFloatingButton
        style={{
          position: "absolute",
          bottom: 20,
          right: 20,
        }}
        onPress={() => {
          router.push("Modal");
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  title: {
    marginLeft: 10,
    fontSize: 24,
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});
