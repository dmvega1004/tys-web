# 📸 Guía Completa: Cómo Agregar Imágenes a la Galería

## 🎯 Resumen Rápido

Para agregar imágenes a la galería del sitio web, sigue estos pasos:

1. **Coloca tus imágenes** en la carpeta `public/galeria/`
2. **Actualiza el componente** `app/components/GallerySection.tsx` con los nombres de tus imágenes
3. **Guarda y despliega** los cambios

---

## 📋 Paso a Paso Detallado

### **Paso 1: Preparar las Imágenes**

#### ✅ **Formatos Soportados:**
- JPG / JPEG (recomendado para fotos)
- PNG (recomendado para imágenes con transparencia)
- WebP (mejor rendimiento, menos peso)

#### ✅ **Recomendaciones de Tamaño:**
- **Dimensiones:** 800x600 px o mayor (manteniendo proporción)
- **Peso:** Menos de 500KB por imagen (ideal para web)
- **Calidad:** Buena calidad pero optimizada para web

#### ✅ **Herramientas para Optimizar:**
- [TinyPNG](https://tinypng.com/) - Reduce el tamaño sin perder calidad
- [Squoosh](https://squoosh.app/) - Herramienta de Google para optimizar imágenes
- Compresor de imágenes de tu preferencia

---

### **Paso 2: Nombrar las Imágenes**

#### ✅ **Buenas Prácticas:**
- ✅ Usa nombres descriptivos: `instalacion-hidraulica.jpg`
- ✅ Usa minúsculas: `equipo-bombeo.jpg`
- ✅ Usa guiones en lugar de espacios: `limpieza-tanques.jpg`
- ✅ Incluye números si tienes varias: `surtidor-01.jpg`, `surtidor-02.jpg`

#### ❌ **Evita:**
- ❌ Espacios: `equipo 1.jpg` → ❌
- ❌ Mayúsculas excesivas: `EQUIPO1.JPG` → ❌
- ❌ Caracteres especiales: `equipo#1.jpg` → ❌
- ❌ Nombres muy largos: `foto-de-equipo-de-bombeo-para-estacion-de-servicio-2024.jpg` → ❌

---

### **Paso 3: Colocar las Imágenes en la Carpeta**

1. **Abre la carpeta del proyecto:**
   ```
   C:\proyecto-tys\public\galeria\
   ```

2. **Copia tus imágenes** directamente en esta carpeta

3. **Estructura final debería verse así:**
   ```
   public/
   └── galeria/
       ├── equipo1.jpg
       ├── equipo2.jpg
       ├── instalacion-hidraulica.jpg
       ├── surtidores.jpg
       └── ... más imágenes
   ```

---

### **Paso 4: Actualizar el Componente**

1. **Abre el archivo:** `app/components/GallerySection.tsx`

2. **Busca el array `galleryImages`** (aproximadamente línea 10)

3. **Actualiza cada objeto** con la información de tus imágenes:

```tsx
const galleryImages = [
  {
    id: 1,
    src: "/galeria/tu-imagen-real.jpg", // ← Nombre exacto de tu archivo
    title: "Título que aparecerá",      // ← Título descriptivo
    description: "Descripción del proyecto o servicio",
    category: "Hidráulica",              // ← Categoría (aparece al hacer hover)
    icon: <FaTools className="text-blue-600 text-2xl" />,
  },
  {
    id: 2,
    src: "/galeria/otra-imagen.jpg",     // ← Siguiente imagen
    title: "Otro Proyecto",
    description: "Otra descripción",
    category: "Surtidores",
    icon: <FaGasPump className="text-blue-600 text-2xl" />,
  },
  // ... agrega más imágenes según necesites
];
```

#### **📝 Ejemplo Real:**

Si tienes una imagen llamada `instalacion-surtidor-01.jpg`:

```tsx
{
  id: 1,
  src: "/galeria/instalacion-surtidor-01.jpg",
  title: "Instalación de Surtidor",
  description: "Montaje completo de surtidor de combustible en estación de servicio",
  category: "Surtidores",
  icon: <FaGasPump className="text-blue-600 text-2xl" />,
}
```

---

### **Paso 5: Íconos Disponibles**

Puedes usar cualquiera de estos íconos (ya están importados):

- `<FaTools />` - Herramientas (Hidráulica)
- `<FaGasPump />` - Bomba de gasolina (Surtidores)
- `<FaWater />` - Agua (Limpieza/Mantenimiento)
- `<FaHardHat />` - Casco (Obras Civiles)
- `<FaCogs />` - Engranajes (Bombeo)
- `<FaPlug />` - Enchufe (Eléctrico)
- `<FaShoppingCart />` - Carrito (Suministros)

---

### **Paso 6: Verificar Localmente**

1. **Inicia el servidor de desarrollo:**
   ```bash
   npm run dev
   ```

2. **Abre en el navegador:**
   ```
   http://localhost:3000
   ```

3. **Navega a la sección Galería** y verifica que las imágenes se vean correctamente

---

### **Paso 7: Subir a Producción**

Una vez que verifiques que todo funciona:

```bash
# 1. Agregar todos los cambios
git add .

# 2. Crear commit
git commit -m "Agregar galería de imágenes y actualizar contenido"

# 3. Subir a GitHub
git push origin main
```

**Nota:** Vercel detectará automáticamente los cambios y hará el deploy. Espera 2-5 minutos y revisa tu sitio.

---

## 🎨 Personalización Avanzada

### **Cambiar el Número de Columnas:**

En `GallerySection.tsx`, busca esta línea:
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
```

- `grid-cols-1` = 1 columna en móvil
- `md:grid-cols-2` = 2 columnas en tablet
- `lg:grid-cols-3` = 3 columnas en desktop

Puedes cambiarlo a `lg:grid-cols-4` para 4 columnas en pantallas grandes.

### **Cambiar la Altura de las Imágenes:**

Busca esta línea:
```tsx
<div className="relative h-64 overflow-hidden bg-gray-200">
```

Cambia `h-64` a:
- `h-48` = más pequeña
- `h-80` = más grande
- `h-96` = aún más grande

---

## ❓ Problemas Comunes

### **Problema: Las imágenes no se ven**

**Solución:**
1. Verifica que los nombres de archivo coincidan exactamente (incluyendo mayúsculas/minúsculas)
2. Verifica que las imágenes estén en `public/galeria/`
3. Verifica que la ruta en el código sea `/galeria/nombre-archivo.jpg` (con la `/` inicial)

### **Problema: Las imágenes se ven borrosas**

**Solución:**
1. Usa imágenes de mayor resolución (800px o más)
2. No las estires más allá de su tamaño original

### **Problema: El sitio carga muy lento**

**Solución:**
1. Optimiza las imágenes con TinyPNG o similar
2. Reduce el peso de cada imagen a menos de 500KB
3. Considera usar formato WebP

---

## 📞 ¿Necesitas Ayuda?

Si tienes problemas, revisa:
1. La consola del navegador (F12) para ver errores
2. Que los nombres de archivo coincidan exactamente
3. Que las rutas sean correctas (`/galeria/` no `galeria/`)

---

## ✅ Checklist Final

Antes de publicar, verifica:

- [ ] Imágenes colocadas en `public/galeria/`
- [ ] Nombres de archivo sin espacios ni caracteres especiales
- [ ] Rutas en `GallerySection.tsx` actualizadas con nombres reales
- [ ] Imágenes optimizadas (menos de 500KB)
- [ ] Funciona correctamente en `localhost:3000`
- [ ] Cambios guardados y pusheados a GitHub

¡Listo! Tu galería debería estar funcionando perfectamente. 🎉

