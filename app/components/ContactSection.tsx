"use client";
import { FaMapMarkerAlt, FaPhone, FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section id="contacto" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-4xl mx-auto text-center px-6">
        <h2 className="text-3xl font-bold text-blue-900 mb-6">Contáctanos</h2>
        <p className="text-gray-700 mb-12 text-lg">
          Si deseas recibir asesoría o una cotización personalizada para tu estación de servicio, comunícate con nosotros.
        </p>
        <div className="grid md:grid-cols-2 gap-6 text-left">
          <div className="bg-white rounded-lg shadow-md p-6 flex items-start space-x-4">
            <FaMapMarkerAlt className="text-blue-600 text-2xl mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-gray-800 mb-1">Dirección</h3>
              <p className="text-gray-600">
                Calle 15 No. 18-22 Barrio San Francisco<br />
                Bucaramanga, Santander<br />
                Código postal: 680011
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 flex items-start space-x-4">
            <FaPhone className="text-blue-600 text-2xl mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-gray-800 mb-1">Teléfono</h3>
              <div className="text-gray-600 space-y-1">
                <a href="tel:+573105305058" className="contact-link">
                  310 530 5058<br />
                </a>
                <a href="tel:+573153065968" className="contact-link">
                  315 306 5968
                </a>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 flex items-start space-x-4">
            <FaWhatsapp className="text-green-500 text-2xl mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-gray-800 mb-1">WhatsApp</h3>
              <a 
                href="https://wa.me/573105305058" 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-link"
              >
                +57 310 530 5058
              </a>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 flex items-start space-x-4">
            <FaEnvelope className="text-blue-600 text-2xl mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-gray-800 mb-1">Correo</h3>
              <a 
                href="mailto:tysestacionesdeservicio@gmail.com" 
                className="contact-link"
              >
                tysestacionesdeservicio@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

