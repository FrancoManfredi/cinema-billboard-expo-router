import { Text } from "react-native";
import AddMovieModal from "../components/AddMovieModal";
import { router } from "expo-router";
import useFetch from "../hooks/useFetch";
import { useData } from "../context/DataContext";

const Modal = () => {
  const { fetchData } = useData();

  return (
    <AddMovieModal
      onClose={() => router.dismiss()}
      onSubmit={async (newMovie) => {
        await fetch(
          "https://unventable-sandfly-maurice.ngrok-free.dev/movies",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newMovie),
          }
        );
        await fetchData();
      }}
    />
  );
};

export default Modal;
