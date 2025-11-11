import { useLocalSearchParams } from "expo-router";
import { Dimensions, StyleSheet, View, FlatList } from "react-native";
import { Stack } from "expo-router";
import MovieDetails from "../../components/MovieDetails";
import useFetch from "../../hooks/useFetch";
import { useEffect, useState } from "react";

export default function Movie() {
  const params = useLocalSearchParams();
  const [movie, setMovie] = useState({});
  const { data, loading, error } = useFetch(
    `https://kaden-propanedioic-spleenfully.ngrok-free.dev/movies/${params.id}`
  );

  useEffect(() => {
    if (loading) {
      console.log("loading...");
    }
    if (error) {
      console.log(error);
    }
    if (data) {
      setMovie(data);
    }
  }, [loading, data]);

  return (
    <View>
      <Stack.Screen
        options={{ title: movie.title, headerBackTitle: "Volver" }}
      />
      <MovieDetails {...movie} />
    </View>
  );
}
