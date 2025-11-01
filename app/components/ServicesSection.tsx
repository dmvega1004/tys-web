"use client";
import { FaTools, FaGasPump, FaWater, FaHardHat, FaCogs, FaPlug, FaShoppingCart } from "react-icons/fa";

export default function ServicesSection() {
  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-blue-900 mb-10">Nuestros Servicios</h2>
        <p className="text-gray-700 max-w-3xl mx-auto mb-12">
          TYS (Tecnología y Servicios para EDS) ofrece soluciones integrales para el sector de estaciones de servicio,
          con más de 25 años de experiencia brindando asesoría, diseño, montaje y mantenimiento especializado.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <FaTools className="text-blue-700 text-4xl mb-4 mx-auto" />,
              title: "Diseño e instalación hidráulica y eléctrica",
              desc: "Montaje completo de sistemas de tubería, cableado, bombas, surtidores y tableros eléctricos para estaciones de servicio.",
            },
            {
              icon: <FaGasPump className="text-blue-700 text-4xl mb-4 mx-auto" />,
              title: "Montaje y mantenimiento de surtidores",
              desc: "Servicio técnico, calibración y mantenimiento de equipos dispensadores de combustible.",
            },
            {
              icon: <FaWater className="text-blue-700 text-4xl mb-4 mx-auto" />,
              title: "Limpieza y mantenimiento de tanques",
              desc: "Limpieza interna y externa de tanques de almacenamiento, garantizando seguridad ambiental y operativa.",
            },
            {
              icon: <FaHardHat className="text-blue-700 text-4xl mb-4 mx-auto" />,
              title: "Obras civiles e hidráulicas",
              desc: "Construcción y adecuación de áreas técnicas, canalizaciones, drenajes y cimentaciones.",
            },
            {
              icon: <FaCogs className="text-blue-700 text-4xl mb-4 mx-auto" />,
              title: "Sistemas de bombeo y redes de combustible",
              desc: "Diseño, instalación y mantenimiento de líneas hidráulicas y de impulsión para EDS.",
            },
            {
              icon: <FaPlug className="text-blue-700 text-4xl mb-4 mx-auto" />,
              title: "Mantenimiento de tableros eléctricos",
              desc: "Inspección, cableado, reemplazo de componentes y normalización según norma RETIE.",
            },
            {
              icon: <FaShoppingCart className="text-blue-700 text-4xl mb-4 mx-auto" />,
              title: "Suministro de repuestos y accesorios",
              desc: "Venta de equipos, válvulas, bombas, accesorios y componentes certificados para estaciones de servicio.",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-6 flex flex-col items-center"
            >
              {service.icon}
              <h3 className="text-lg font-semibold text-blue-800 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


