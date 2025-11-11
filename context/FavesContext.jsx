import { React, createContext, useContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const FavesContext = createContext();

export default function FavesProvider({ children }) {
  const [faves, setFaves] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadFaves = async () => {
      try {
        const saved = await AsyncStorage.getItem("faves");
        if (saved) {
          setFaves(JSON.parse(saved));
        }
      } catch (err) {
        console.log("Error loading faves from storage:", err);
      } finally {
        setIsLoading(false);
      }
    };
    loadFaves();
  }, []);

  useEffect(() => {
    if (!isLoading) {
      const saveFaves = async () => {
        try {
          await AsyncStorage.setItem("faves", JSON.stringify(faves));
        } catch (err) {
          console.log("Error saving faves to storage:", err);
        }
      };
      saveFaves();
    }
  }, [faves, isLoading]);

  const toggleFave = (id) => {
    if (faves.some((faveId) => faveId === id)) {
      setFaves((prev) => prev.filter((faveId) => faveId !== id));
    } else {
      setFaves([...faves, id]);
    }
  };

  return (
    <FavesContext.Provider value={{ faves, setFaves, toggleFave, isLoading }}>
      {children}
    </FavesContext.Provider>
  );
}

export const useFaves = () => useContext(FavesContext);
