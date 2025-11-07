import { Tabs } from "expo-router";
import DataProvider from "../../context/DataContext";

export default function RootLayout() {
  return (
    <DataProvider>
      <Tabs screenOptions={{ headerShown: false }}>
        <Tabs.Screen name="index" options={{ title: "All Movies" }} />
        <Tabs.Screen
          name="ByCategory"
          options={{ title: "Movies By Categories" }}
        />
      </Tabs>
    </DataProvider>
  );
}
