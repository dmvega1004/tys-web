export default function Home() {
  return (
    <section id="inicio" className="bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="text-center">
          {/* Hero Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            <span className="text-blue-600">TYS</span>: Expertos en Instalaciones para{" "}
            <span className="text-indigo-600">Estaciones de Servicio</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">
            Con <span className="font-semibold text-blue-600">25 años de experiencia</span> en el sector, 
            ofrecemos soluciones integrales en tecnología y servicios para estaciones de servicio
          </p>
          
          {/* Description */}
          <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
            Especialistas en instalaciones hidráulicas, sistemas de combustible y tecnología avanzada 
            para garantizar la eficiencia y seguridad de su estación de servicio.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#servicios"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Nuestros Servicios
            </a>
            <a
              href="#contacto"
              className="bg-white hover:bg-gray-50 text-blue-600 font-semibold py-4 px-8 rounded-lg border-2 border-blue-600 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Contactar Ahora
            </a>
          </div>
          
          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">25+</div>
              <div className="text-gray-600">Años de Experiencia</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Proyectos Completados</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-gray-600">Satisfacción del Cliente</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}