"use client";
import { FaStar, FaTools, FaAward, FaUsers, FaCheckCircle } from "react-icons/fa";

export default function AboutSection() {
  return (
    <section id="nosotros" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Sección: ¿QUÉ HACEMOS? */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">
              ¿QUÉ HACEMOS?
            </h2>
            {/* Calificaciones */}
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-xl" />
                ))}
              </div>
              <span className="text-2xl font-bold text-blue-900">5.0</span>
              <span className="text-gray-600">5 calificaciones</span>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 md:p-10">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Columna izquierda - Servicios principales */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <FaTools className="text-blue-600 text-2xl mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Instalaciones Hidráulicas y Eléctricas</h3>
                    <p className="text-gray-700 text-sm">
                      Diseño, montaje y asesoría técnica en instalaciones hidráulicas y eléctricas para estaciones de servicio.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <FaCheckCircle className="text-blue-600 text-2xl mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Mantenimiento y Reparación</h3>
                    <p className="text-gray-700 text-sm">
                      Mantenimiento, reparación y fabricación de tableros eléctricos.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <FaCheckCircle className="text-blue-600 text-2xl mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Bombas Sumergibles</h3>
                    <p className="text-gray-700 text-sm">
                      Mantenimiento y reparación de bombas sumergibles <strong>Red Jacket</strong>, <strong>Fe Petro</strong>, <strong>Tokheim</strong>.
                    </p>
                  </div>
                </div>
              </div>

              {/* Columna derecha - Más servicios */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <FaCheckCircle className="text-blue-600 text-2xl mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Dispensadores y Surtidores</h3>
                    <p className="text-gray-700 text-sm">
                      Reparación y calibración de dispensadores y surtidores <strong>Wayne</strong>, <strong>Gilbarco</strong>, <strong>Tokheim</strong>, <strong>Hong Yang</strong>, <strong>Bluesky</strong>, <strong>Fill-Rite</strong>.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <FaCheckCircle className="text-blue-600 text-2xl mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Suministros y Limpieza</h3>
                    <p className="text-gray-700 text-sm">
                      Suministros de equipos surtidores y dispensadores para combustibles líquidos (gasolina y diesel). Limpieza y lavado de tanques de combustible.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <FaAward className="text-blue-600 text-2xl mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Cobertura Nacional</h3>
                    <p className="text-gray-700 text-sm">
                      Servicio a nivel nacional. <strong>ANTIGUO SURTITECNICOS</strong>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sección: ¿QUIÉNES SOMOS? */}
        <div>
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">
              ¿QUIÉNES SOMOS?
            </h2>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 md:p-10">
            <div className="max-w-4xl mx-auto space-y-6">
              {/* Párrafo principal */}
              <p className="text-lg text-gray-700 leading-relaxed">
                Somos una empresa especializada en el <strong className="text-blue-900">diseño, montaje y asesoría técnica</strong> en instalaciones hidráulicas y eléctricas en estaciones de servicio, tenemos <strong className="text-blue-900">más de 25 años de experiencia</strong> en el montaje y mantenimiento de equipos surtidores para el despacho de combustible en estaciones de servicio a nivel nacional.
              </p>

              {/* Puntos destacados */}
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-lg">
                  <FaUsers className="text-blue-600 text-2xl mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Personal Calificado</h3>
                    <p className="text-gray-700 text-sm">
                      Contamos con personal altamente calificado lo cual garantiza un trabajo óptimo para el cliente y el buen funcionamiento de su estación.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-lg">
                  <FaAward className="text-blue-600 text-2xl mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Respaldo Nacional</h3>
                    <p className="text-gray-700 text-sm">
                      Contamos con el respaldo de una red de importadores a nivel nacional de equipos y accesorios.
                    </p>
                  </div>
                </div>
              </div>

              {/* Certificación SIMEL */}
              <div className="mt-8 p-6 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg text-white">
                <div className="flex items-center space-x-4">
                  <FaAward className="text-white text-3xl flex-shrink-0" />
                  <div>
                  <h3 className="font-semibold text-xl mb-2 text-white md:text-white">
                   Certificación SIMEL
                  </h3>

                    <p className="text-white font-light">
                     <strong className="text-white">Nos encontramos inscritos en la</strong>{" "}
                     <strong className="font-bold italic text-white">Superintendencia de Industria y Comercio</strong>{" "}
                       <strong className="text-white">como reparadores</strong>{" "}
                     <strong className="font-bold italic text-white">(SIMEL)</strong>.
                     </p>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

