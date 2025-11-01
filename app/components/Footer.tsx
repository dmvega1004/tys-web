import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Información de la empresa */}
          <div className="space-y-4">
            <div className="flex items-center">
              <Image 
                src="/logo-tys.png" 
                alt="TYS Logo" 
                width={32} 
                height={32} 
                className="rounded-lg"
              />
              <span className="ml-2 text-lg font-bold">
                Tecnología y Servicios
              </span>
            </div>
            <p className="text-gray-300 text-sm">
              Especialistas en instalaciones hidráulicas para estaciones de servicio
            </p>
          </div>

          {/* Información de contacto */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contacto</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-start">
                <svg
                  className="h-4 w-4 mr-2 text-blue-400 mt-1 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>Calle 15 No. 18-22, Barrio San Francisco, Bucaramanga, Santander</span>
              </div>
              <div className="flex items-center">
                <svg
                  className="h-4 w-4 mr-2 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>310 530 5058 • 315 306 5968</span>
              </div>
              <div className="flex items-center">
                <svg
                  className="h-4 w-4 mr-2 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>tysestacionesdeservicio@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Enlaces</h3>
            <div className="space-y-2 text-sm">
              <a
                href="#inicio"
                className="block text-gray-300 hover:text-white transition-colors duration-200"
              >
                Inicio
              </a>
              <a
                href="#servicios"
                className="block text-gray-300 hover:text-white transition-colors duration-200"
              >
                Servicios
              </a>
              <a
                href="#nosotros"
                className="block text-gray-300 hover:text-white transition-colors duration-200"
              >
                Nosotros
              </a>
              <a
                href="#contacto"
                className="block text-gray-300 hover:text-white transition-colors duration-200"
              >
                Contacto
              </a>
            </div>
          </div>
        </div>

        {/* Línea divisoria y copyright */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © 2024 TYS (Tecnología y Servicios para EDS). Todos los derechos reservados.
            </p>
            <p className="text-gray-400 text-xs mt-2 md:mt-0">
              25 años de experiencia en el sector
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
