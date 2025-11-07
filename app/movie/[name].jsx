import { useLocalSearchParams } from "expo-router";
import { Dimensions, StyleSheet, View, FlatList } from "react-native";
import { Stack } from "expo-router";

export default function Movie() {
  const params = useLocalSearchParams();
  const name = params.name;

  return <Stack.Screen options={{ title: name }} />;
}
