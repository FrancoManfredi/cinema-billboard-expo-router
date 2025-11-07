import { createContext, useContext, useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";

export const DataContext = createContext();

export default function DataProvider({ children }) {
  const {
    data: dataMovies,
    loading,
    error,
    fetchData,
  } = useFetch("https://unventable-sandfly-maurice.ngrok-free.dev/movies");

  const { data: dataCategories } = useFetch(
    "https://unventable-sandfly-maurice.ngrok-free.dev/categories"
  );

  const [movies, setMovies] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (Array.isArray(dataMovies)) setMovies(dataMovies);
    if (dataCategories) {
      // Normalización robusta
      const normalized = Array.isArray(dataCategories)
        ? dataCategories
        : dataCategories.categories ?? [];
      setCategories(normalized);
    }
  }, [dataMovies, dataCategories]);

  return (
    <DataContext.Provider
      value={{ movies, categories, loading, error, fetchData }}
    >
      {children}
    </DataContext.Provider>
  );
}

export const useData = () => useContext(DataContext);
