import ServicesSection from "./components/ServicesSection";
import GallerySection from "./components/GallerySection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section
        id="inicio"
        className="relative bg-cover bg-center bg-no-repeat text-white"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/fondo-encabezado.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed", // ← 👈 Esto mantiene la imagen fija
        }}
      >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            {/* Título principal */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white">
              <span className="text-yellow-400">TYS</span>: Expertos en Instalaciones para{" "}
              <span className="text-blue-400">Estaciones de Servicio</span>
            </h1>

            {/* Subtítulo */}
            <p className="text-xl sm:text-2xl text-gray-100 mb-8 max-w-4xl mx-auto leading-relaxed">
              Con <span className="font-semibold text-yellow-400">25 años de experiencia</span> en el sector, 
              ofrecemos soluciones integrales en tecnología y servicios para estaciones de servicio.
            </p>

            {/* Descripción */}
            <p className="text-lg text-gray-200 mb-12 max-w-3xl mx-auto">
              Especialistas en instalaciones hidráulicas, sistemas de combustible y tecnología avanzada 
              para garantizar la eficiencia y seguridad de su estación de servicio.
            </p>

            {/* Botones CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#servicios"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Nuestros Servicios
              </a>
              <a
                href="#contacto"
                className="bg-transparent hover:bg-white hover:text-blue-600 text-white font-semibold py-4 px-8 rounded-lg border-2 border-white transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Contactar Ahora
              </a>
            </div>

            {/* Métricas */}
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">25+</div>
                <div className="text-gray-100">Años de Experiencia</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">500+</div>
                <div className="text-gray-100">Proyectos Completados</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">100%</div>
                <div className="text-gray-100">Satisfacción del Cliente</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Secciones adicionales */}
      <ServicesSection />
      <GallerySection />
      <AboutSection />
      <ContactSection />
    </>
  );
}
