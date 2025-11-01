"use client";
import { useState } from "react";
import Image from "next/image";
import { FaTools, FaGasPump, FaWater, FaHardHat, FaCogs, FaPlug, FaShoppingCart, FaTimes } from "react-icons/fa";

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  // Array de imágenes de la galería
  // Reemplaza estos paths con los nombres reales de tus imágenes cuando las agregues
  const galleryImages = [
    {
      id: 1,
      src: "/galeria/bomba_sumergible.jpg", // Cambia por el nombre real de tu imagen
      title: "Bomba Sumergible para tanque de combustible",
      description: "Sistema de tuberías y bombas para estaciones de servicio",
      category: "Hidráulica",
      icon: <FaTools className="text-blue-600 text-2xl" />,
    },
    {
      id: 2,
      src: "/galeria/dispensador_de_combistible.jpg",
      title: "Surtidores",
      description: "Montaje y mantenimiento de dispensadores de combustible",
      category: "Surtidores",
      icon: <FaGasPump className="text-blue-600 text-2xl" />,
    },
    {
      id: 3,
      src: "/galeria/limpieza_de_tanque.jpg",
      title: "Limpieza de Tanques",
      description: "Servicio profesional de mantenimiento de tanques de almacenamiento",
      category: "Mantenimiento",
      icon: <FaWater className="text-blue-600 text-2xl" />,
    },
    {
      id: 4,
      src: "/galeria/mantenimiento_preventivo_dispensadores_de_combustible.jpg",
      title: "Mantenimiento Preventivo de Dispensadores",
      description: "Mantenimiento preventivo de dispensadores de combustible",
      category: "Mantenimiento",
      icon: <FaHardHat className="text-blue-600 text-2xl" />,
    },
    {
      id: 5,
      src: "/galeria/dispensador_de_combustible_HONGYANG.jpg",
      title: "Dispensador de combustible HONG YANG",
      description: "Instalación de dispensadores de combustible",
      category: "Dispensadores de combustible",
      icon: <FaCogs className="text-blue-600 text-2xl" />,
    },
    {
      id: 6,
      src: "/galeria/configuracion_programacion_equipos_dispensadores_de_combustible.jpg",
      title: "Configuración y Programación de Equipos",
      description: "Mantenimiento y programación de equipos de combustible",
      category: "Eléctrico",
      icon: <FaPlug className="text-blue-600 text-2xl" />,
    },
  ];

  return (
    <section id="galeria" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">
            Nuestra Galería de Trabajos
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Conoce algunos de nuestros proyectos y servicios realizados para estaciones de servicio.
            Más de 25 años de experiencia reflejados en cada instalación.
          </p>
        </div>

        {/* Galería Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item.id)}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
            >
              {/* Contenedor de imagen */}
              <div className="relative h-64 overflow-hidden bg-gray-100">
                {/* Imagen principal - SIEMPRE VISIBLE con zoom en hover */}
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={item.id <= 3}
                  onError={(e) => {
                    // Si la imagen no existe, muestra un placeholder
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = '<div class="w-full h-full flex items-center justify-center bg-gray-200 text-gray-400">Imagen no disponible</div>';
                    }
                  }}
                />
                
                {/* Overlay con categoría - SOLO visible en hover */}
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none">
                  {item.category}
                </div>
                
                {/* Overlay oscuro con ícono - SOLO aparece en hover */}
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300 flex items-center justify-center z-10 pointer-events-none">
                  <div className="transform scale-0 group-hover:scale-100 transition-transform duration-300 text-white">
                    {item.icon}
                  </div>
                </div>
              </div>

              {/* Información */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal para imagen ampliada */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-5xl max-h-full w-full h-full flex items-center justify-center">
              {/* Botón cerrar */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10 bg-black bg-opacity-50 rounded-full p-3"
                aria-label="Cerrar imagen"
              >
                <FaTimes size={24} />
              </button>
              
              {/* Imagen ampliada */}
              <div className="relative w-full h-full max-w-5xl max-h-[90vh] flex items-center justify-center">
                {galleryImages.find(img => img.id === selectedImage) && (
                  <Image
                    src={galleryImages.find(img => img.id === selectedImage)!.src}
                    alt={galleryImages.find(img => img.id === selectedImage)!.title}
                    fill
                    className="object-contain"
                    sizes="90vw"
                    priority
                  />
                )}
              </div>
              
              {/* Información de la imagen */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-75 text-white px-6 py-4 rounded-lg max-w-2xl text-center">
                <h3 className="text-xl font-semibold mb-2">
                  {galleryImages.find(img => img.id === selectedImage)?.title}
                </h3>
                <p className="text-sm text-gray-200">
                  {galleryImages.find(img => img.id === selectedImage)?.description}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Mensaje si no hay imágenes cargadas */}
        <div className="mt-12 text-center text-gray-500 text-sm">
          <p>
            💡 <strong>Nota:</strong> Para agregar tus propias imágenes, colócalas en la carpeta{" "}
            <code className="bg-gray-100 px-2 py-1 rounded">public/galeria/</code> y actualiza los nombres en el componente.
          </p>
        </div>
      </div>
    </section>
  );
}

