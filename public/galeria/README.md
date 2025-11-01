# 📸 Galería de Imágenes

Esta carpeta contiene las imágenes que se mostrarán en la sección de galería del sitio web.

## 📋 Cómo agregar imágenes

### Paso 1: Preparar las imágenes
- **Formatos recomendados:** JPG, PNG, WebP
- **Tamaño recomendado:** 800x600 px o mayor (manteniendo proporción)
- **Peso recomendado:** Menos de 500KB por imagen (para mejor rendimiento)

### Paso 2: Nombrar las imágenes
Usa nombres descriptivos y sin espacios. Ejemplos:
- ✅ `equipo1.jpg`
- ✅ `instalacion-hidraulica.jpg`
- ✅ `surtidores-mantenimiento.jpg`
- ❌ `equipo 1.jpg` (evita espacios)
- ❌ `EQUIPO1.JPG` (mejor en minúsculas)

### Paso 3: Colocar las imágenes aquí
Simplemente copia tus imágenes a esta carpeta:
```
public/galeria/tu-imagen.jpg
```

### Paso 4: Actualizar el componente
Edita el archivo `app/components/GallerySection.tsx` y actualiza el array `galleryImages` con los nombres reales de tus imágenes:

```tsx
const galleryImages = [
  {
    id: 1,
    src: "/galeria/tu-imagen-real.jpg", // ← Cambia aquí
    title: "Título de tu imagen",
    description: "Descripción del proyecto o servicio",
    category: "Categoría",
    // ...
  },
  // ... más imágenes
];
```

## 🎨 Categorías sugeridas
- Hidráulica
- Surtidores
- Mantenimiento
- Obras Civiles
- Bombeo
- Eléctrico

## 💡 Tips
- Si no agregas las imágenes, el componente mostrará placeholders
- Las imágenes se optimizan automáticamente con Next.js Image
- Usa herramientas como TinyPNG o Squoosh para reducir el tamaño

