import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function Home() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>🎬 Cinema Billboard - Ejercicio con Expo Router</Text>
        
        <Text style={styles.sectionTitle}>📋 Objetivo del Ejercicio</Text>
        <Text style={styles.text}>
          Debes reimplementar el ejercicio anterior de gestión de películas, 
          pero ahora utilizando <Text style={styles.bold}>Expo Router</Text> para la navegación 
          entre pantallas.
        </Text>

        <Text style={styles.sectionTitle}>🏗️ Estructura de Navegación</Text>
        
        <Text style={styles.subtitle}>1. Pantalla Principal (Tabs)</Text>
        <Text style={styles.text}>
          • Implementar navegación por Tabs con 2 pestañas:{'\n'}
          • Tab &ldquo;All Movies&rdquo;: Lista vertical de todas las películas{'\n'}
          • Tab &ldquo;By Categories&rdquo;: Películas agrupadas por categorías con scroll horizontal
        </Text>

        <Text style={styles.subtitle}>2. Pantalla de Detalles (Stack)</Text>
        <Text style={styles.text}>
          • Al hacer tap en cualquier película (desde All o By Categories), navegar a:{'\n'}
          • Pantalla <Text style={styles.code}>MovieDetails</Text> usando <Text style={styles.code}>{'<Stack />'}</Text>{'\n'}
          • El título de la pantalla debe ser el nombre de la película{'\n'}
          • Mostrar toda la información de la película
        </Text>

        <Text style={styles.subtitle}>3. Sección de Reviews</Text>
        <Text style={styles.text}>
          • Se agregaron reviews en data.json para cada película{'\n'}
          • Mostrar las reviews en un FlatList con scroll horizontal{'\n'}
          • Usar <Text style={styles.code}>profile-circle.svgrepo-com.svg</Text> como imagen de perfil{'\n'}
          • Si no hay reviews: mostrar mensaje &ldquo;Aún no hay reviews para esta película&rdquo;
        </Text>

        <Text style={styles.subtitle}>4. Add Movie como Modal</Text>
        <Text style={styles.text}>
          • Convertir el modal de Add Movie en una pantalla separada{'\n'}
          • Usar: <Text style={styles.code}>{"options={{ presentation: 'modal' }}"}</Text>{'\n'}
          • Mantener toda la funcionalidad de agregar películas
        </Text>

        <Text style={styles.sectionTitle}>✅ Funcionalidades a Mantener</Text>
        <Text style={styles.text}>
          • Formateo de rating (estrellas ⭐){'\n'}
          • Formateo de duración (Xh Ymin){'\n'}
          • Fetch de datos desde json-server{'\n'}
          • Agregar nuevas películas vía API{'\n'}
          • Refetch automático después de agregar película{'\n'}
          • Estados de carga y manejo de errores
        </Text>

        <Text style={styles.sectionTitle}>🎯 Puntos Clave</Text>
        <Text style={styles.text}>
          ✓ Expo Router ya está instalado en este proyecto{'\n'}
          ✓ Usa file-based routing (app/){'\n'}
          ✓ Las reviews están en data.json lisas para usar{'\n'}
          ✓ Mantén la misma lógica, solo cambia la navegación
        </Text>

        <Text style={styles.footer}>
          💡 Revisa la documentación de Expo Router para Tabs y Stack navigation
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 20,
    paddingBottom: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#1a1a1a",
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 24,
    marginBottom: 12,
    color: "#2c3e50",
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: 16,
    marginBottom: 8,
    color: "#34495e",
  },
  text: {
    fontSize: 15,
    lineHeight: 24,
    color: "#555",
    marginBottom: 8,
  },
  bold: {
    fontWeight: "bold",
    color: "#2c3e50",
  },
  code: {
    fontFamily: "monospace",
    backgroundColor: "#f5f5f5",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    fontSize: 14,
    color: "#e74c3c",
  },
  footer: {
    fontSize: 14,
    fontStyle: "italic",
    color: "#7f8c8d",
    marginTop: 32,
    textAlign: "center",
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: "#ecf0f1",
  },
});
