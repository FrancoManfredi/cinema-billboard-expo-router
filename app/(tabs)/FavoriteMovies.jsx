import { Text, FlatList } from "react-native";
import { useFaves } from "../../context/FavesContext";
import { useData } from "../../context/DataContext";
import Movie from "../../components/Movie";
import { SafeAreaView } from "react-native-safe-area-context";

const FavoriteMovies = () => {
  const { faves, toggleFave } = useFaves();
  const { movies, loading } = useData();

  const favoriteMovies = movies.filter((movie) =>
    faves.some((id) => id === movie.id)
  );

  if (loading) {
    return (
      <SafeAreaView
        edges={["top"]}
        style={{ flex: 1, backgroundColor: "white" }}
      >
        <Text>Cargando...</Text>
      </SafeAreaView>
    );
  }

  if (favoriteMovies.length === 0) {
    return (
      <SafeAreaView
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <Text style={{ fontSize: 18, color: "#999" }}>
          No favorite movies yet 💔
        </Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView edges={["top"]} style={{ flex: 1, backgroundColor: "white" }}>
      <FlatList
        data={favoriteMovies}
        renderItem={({ item }) => (
          <Movie
            {...item}
            isFavorite={faves.some((id) => id === item.id)}
            handleFave={() => toggleFave(item.id)}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
};

export default FavoriteMovies;
