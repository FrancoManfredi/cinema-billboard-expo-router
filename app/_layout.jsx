import { Stack, Tabs } from "expo-router";

export default function RootLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="index" options={{ title: "All Movies" }} />
      <Tabs.Screen
        name="ByCategory"
        options={{ title: "Movies By Categories" }}
      />
    </Tabs>
  );
}
