import { Dimensions, StyleSheet, View, Text, FlatList } from "react-native";
import Movie from "../components/Movie";
import AddMovieFloatingButton from "../components/AddMovieFloatingButton";
import SegmentControl from "../components/SegmentControl";
import AddMovieModal from "../components/AddMovieModal";
import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useData } from "../context/DataContext";

export default function Dashboard() {
  const { movies, categories, loading, fetchData } = useData();
  const [modalVisible, setModalVisible] = useState(false);

  if (loading) {
    return (
      <SafeAreaView>
        <Text>Cargando...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView edges={["top"]} style={{ flex: 1, backgroundColor: "white" }}>
      <FlatList data={movies} renderItem={({ item }) => <Movie {...item} />} />

      <AddMovieFloatingButton
        style={{
          position: "absolute",
          bottom: 20,
          right: 20,
        }}
        onPress={() => {
          console.log("Add Movie Pressed");
          setModalVisible(true);
        }}
      />

      <AddMovieModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSubmit={async (newMovie) => {
          await fetch(
            "https://unventable-sandfly-maurice.ngrok-free.dev/movies",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(newMovie),
            }
          );
          await fetchData();
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
