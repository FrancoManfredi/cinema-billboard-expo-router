# 🎬 Cinema Billboard - Ejercicio con Expo Router

## 📋 Objetivo del Ejercicio

Debes reimplementar el ejercicio anterior de gestión de películas, pero ahora utilizando **Expo Router** para la navegación entre pantallas.

---

## 🏗️ Estructura de Navegación

### 1. Pantalla Principal (Tabs)

Implementar navegación por **Tabs** con 2 pestañas:

- **Tab "All Movies"**: Lista vertical de todas las películas
- **Tab "By Categories"**: Películas agrupadas por categorías con scroll horizontal

**Requisitos:**

- Usar `<Tabs />` de Expo Router
- Ambos tabs deben cargar datos desde la API
- Mantener el diseño y funcionalidad del ejercicio anterior

### 2. Pantalla de Detalles (Stack)

Al hacer tap en cualquier película (desde "All Movies" o "By Categories"), navegar a:

- Pantalla `MovieDetails` usando `<Stack />`
- El **título de la pantalla** debe ser el nombre de la película
- Mostrar toda la información de la película:
  - Póster
  - Título
  - Descripción
  - Duración (formateada como "Xh Ymin")
  - Rating (como estrellas ⭐)
  - Categoría

**Navegación:**

- Pasar el ID de la película como parámetro en la URL
- Obtener los datos de la película desde la API usando el ID

### 3. Sección de Reviews

Se agregaron **reviews** en `data.json` para cada película. En la pantalla `MovieDetails`:

**Requisitos:**

- Mostrar las reviews en un **FlatList con scroll horizontal**
- Usar `profile-circle.svgrepo-com.svg` como imagen de perfil del reviewer
- Cada review debe mostrar:
  - Imagen de perfil
  - Username del reviewer
  - Texto de la review
  - Rating individual (del 1 al 10)

**Caso sin reviews:**

- Si el array de reviews está vacío, mostrar el mensaje:
  > "Aún no hay reviews para esta película"

### 4. Add Movie como Modal

Convertir el modal de "Add Movie" en una **pantalla separada**:

**Configuración:**

```javascript
// En el archivo de la pantalla
export default function AddMovie() {
  // ... tu código
}

// En _layout.jsx donde defines el Stack
<Stack.Screen
  name="add-movie"
  options={{
    presentation: "modal",
    title: "Agregar Película",
  }}
/>;
```

**Funcionalidad:**

- Mantener todos los campos del formulario
- Validación de datos
- POST a la API
- Refetch de películas después de agregar
- Cerrar modal y navegar de vuelta usando `router.back()` o `router.push()`

---

## ✅ Funcionalidades a Mantener

Todas estas funcionalidades del ejercicio anterior deben seguir funcionando:

### Formateo de Datos

- ⭐ **Rating**: Convertir de 0-10 a 1-5 estrellas (usando emojis)
- ⏱️ **Duración**: Formatear minutos a "Xh Ymin" (ej: 68min → "1h 8min")

### Integración con API

- 📡 Fetch de datos desde `json-server`
- ➕ Agregar nuevas películas vía POST request
- 🔄 Refetch automático después de agregar película
- ⏳ Estados de carga mientras se obtienen datos
- ❌ Manejo de errores

### Validaciones

- Todos los campos son obligatorios al agregar película
- Categoría debe ser una de las existentes en la API
- Rating debe estar entre 0 y 10
- Duración debe ser un número válido

---

## 🎯 Puntos Clave

✓ **Expo Router ya está instalado** en este proyecto

✓ Usa **file-based routing** (carpeta `app/`)

✓ Las **reviews están en data.json** listas para usar

✓ Mantén la misma lógica de negocio, solo cambia la navegación

✓ Usa `useRouter()` y `useLocalSearchParams()` hooks de Expo Router

---

## 📁 Estructura de Archivos Sugerida

```
app/
├── _layout.jsx              # Root layout con Stack
├── (tabs)/
│   ├── _layout.jsx          # Tabs layout
│   ├── index.jsx            # Tab "All Movies"
│   └── categories.jsx       # Tab "By Categories"
├── movie/
│   └── [id].jsx             # Pantalla MovieDetails (dynamic route)
└── add-movie.jsx            # Modal de agregar película
```

---

## 💡 Recursos y Ayuda

### Documentación Oficial

- [Expo Router - Introducción](https://docs.expo.dev/router/introduction/)
- [Expo Router - Tabs](https://docs.expo.dev/router/advanced/tabs/)
- [Expo Router - Stack](https://docs.expo.dev/router/advanced/stack/)
- [Expo Router - Modal](https://docs.expo.dev/router/advanced/modals/)
- [Expo Router - Dynamic Routes](https://docs.expo.dev/router/advanced/dynamic-routes/)

### Hooks Importantes

- `useRouter()` - Para navegación programática
- `useLocalSearchParams()` - Para obtener parámetros de la URL
- `usePathname()` - Para obtener la ruta actual
- `useFocusEffect()` - Para ejecutar código cuando la pantalla se enfoca

### Ejemplo de Navegación

```javascript
import { useRouter } from "expo-router";

const router = useRouter();

// Navegar a detalles de película
router.push(`/movie/${movieId}`);

// Navegar a modal
router.push("/add-movie");

// Volver atrás
router.back();
```

### Ejemplo de Obtener Parámetros

```javascript
import { useLocalSearchParams } from "expo-router";

export default function MovieDetails() {
  const { id } = useLocalSearchParams();

  // Usar el id para hacer fetch de la película
  // ...
}
```

---

## 🎨 Consideraciones de Diseño

- Mantén el diseño consistente con el ejercicio anterior
- Usa transiciones suaves entre pantallas
- La imagen de perfil para reviews debe ser circular
- Las reviews deben poder scrollearse horizontalmente sin afectar el scroll principal
- El botón de agregar película debe ser un FloatingActionButton (o similar) visible desde los tabs

---

## 🧪 Testing

Asegúrate de probar:

1. ✅ Navegación entre tabs
2. ✅ Tap en película desde "All Movies"
3. ✅ Tap en película desde "By Categories"
4. ✅ Visualización correcta de reviews
5. ✅ Caso de película sin reviews
6. ✅ Apertura del modal de agregar película
7. ✅ Agregar película y ver que aparece en las listas
8. ✅ Navegación hacia atrás desde detalles
9. ✅ Cierre del modal después de agregar

---

## 📝 Entrega

- Código funcionando sin errores en consola
- JSON Server corriendo en puerto 3000
- Todas las funcionalidades implementadas
- Navegación fluida entre pantallas
- Reviews funcionando correctamente

---

¡Buena suerte con el ejercicio! 🚀

Recuerda: El objetivo es aprender **file-based routing** y **navegación declarativa** con Expo Router. Tómate tu tiempo para entender cómo funciona cada parte.
