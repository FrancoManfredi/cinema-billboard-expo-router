import { Stack } from "expo-router";
import DataProvider from "../context/DataContext";

export default function RootLayout() {
  return (
    <DataProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="movie/[id]" />
        <Stack.Screen
          name="Modal"
          options={{
            presentation: "modal",
            title: "Add New Movie",
            headerStyle: { backgroundColor: "blue" },
            headerTintColor: "white",
          }}
        />
      </Stack>
    </DataProvider>
  );
}
