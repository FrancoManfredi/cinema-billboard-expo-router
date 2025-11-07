import { Button, Modal, StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";
import CategoriesDropDown from "./CategoriesDropDown";
import { useData } from "../context/DataContext";

export default function AddMovieModal({ visible, onClose, onSubmit }) {
  const { categories = [] } = useData(); // <- Garantizamos array
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");
  const [rating, setRating] = useState("");
  const [poster, setPoster] = useState("");
  const [nameError, setNameError] = useState(null);

  function capitalizeString(str) {
    return str
      .split(" ")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
      .join(" ");
  }

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.modalContent}>
          <Text style={styles.title}>Add New Movie</Text>

          <TextInput
            placeholder="Title"
            style={styles.input}
            value={title}
            onChangeText={setTitle}
          />

          <TextInput
            placeholder="Description"
            style={styles.input}
            value={description}
            onChangeText={setDescription}
          />

          <TextInput
            placeholder="Duration"
            style={styles.input}
            value={duration}
            onChangeText={setDuration}
          />

          <TextInput
            placeholder="Rating"
            style={styles.input}
            value={rating}
            onChangeText={setRating}
          />

          <TextInput
            placeholder="Poster URL"
            style={styles.input}
            value={poster}
            onChangeText={setPoster}
          />

          <CategoriesDropDown
            categories={categories} // <- ya es array seguro
            onSelectCategory={setSelectedCategory}
            selectedCategory={selectedCategory}
          />

          {!!nameError && <Text style={styles.error}>{nameError}</Text>}

          <View style={styles.buttonContainer}>
            <Button
              title="Submit"
              onPress={() => {
                if (
                  !title ||
                  !description ||
                  !poster ||
                  !rating ||
                  !duration ||
                  !selectedCategory
                ) {
                  setNameError("Completa todos los campos para continuar.");
                  return;
                }

                setNameError(null);

                onSubmit?.({
                  title: capitalizeString(title),
                  description: capitalizeString(description),
                  poster,
                  rating: parseFloat(rating) || rating,
                  duration: parseInt(duration, 10) || duration,
                  category: selectedCategory,
                });

                onClose();
              }}
            />
            <Button title="Close" onPress={onClose} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: "80%",
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  error: {
    color: "red",
    marginBottom: 10,
  },
});
