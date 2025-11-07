import { FlatList, View, Text, StyleSheet, ScrollView } from "react-native";
import Movie from "./Movie";
import { useData } from "../context/DataContext";
import { SafeAreaView } from "react-native-safe-area-context";

const MoviesByCategory = () => {
  const { movies, categories, loading, fetchData } = useData();

  return (
    <SafeAreaView edges={["top"]} style={{ flex: 1, backgroundColor: "white" }}>
      <FlatList
        data={categories}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View style={styles.categoryContainer}>
            <Text style={styles.title}>{item.name}</Text>

            <ScrollView
              horizontal
              contentContainerStyle={styles.scrollContainer}
              style={styles.scroll}
            >
              {movies
                ?.filter((movie) => movie.category === item.name)
                ?.map((movie, index) => (
                  <Movie key={index} {...movie} />
                ))}
            </ScrollView>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  categoryContainer: {
    backgroundColor: "white",
    paddingVertical: 10,
  },
  scroll: {
    backgroundColor: "white",
  },
  scrollContainer: {
    paddingLeft: 10,
  },
  title: {
    marginLeft: 10,
    fontSize: 24,
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});

export default MoviesByCategory;
