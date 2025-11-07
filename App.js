import { useEffect } from "react";
import Dashboard from "./components/Dashboard";
import { SafeAreaProvider } from "react-native-safe-area-context";
import useFetch from "./hooks/useFetch";
import { Text } from "react-native";
import { DataProvider } from "./context/DataContext";

export default function App() {
  return (
    <SafeAreaProvider>
      <DataProvider>
        <Dashboard />
      </DataProvider>
    </SafeAreaProvider>
  );
}
