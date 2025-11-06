import { createContext, useContext, useState, useEffect } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
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
    if (dataMovies) setMovies(dataMovies);
    if (dataCategories) setCategories(dataCategories);
  }, [dataMovies, dataCategories]);

  return (
    <DataContext.Provider
      value={{ movies, categories, loading, error, fetchData }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
