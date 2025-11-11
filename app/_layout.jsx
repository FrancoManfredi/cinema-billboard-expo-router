import { Stack } from "expo-router";
import DataProvider from "../context/DataContext";
import FavesProvider from "../context/FavesContext";

export default function RootLayout() {
  return (
    <FavesProvider>
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
    </FavesProvider>
  );
}
