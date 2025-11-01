"use client";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/573105305058?text=Hola%20TYS,%20deseo%20más%20información%20sobre%20sus%20servicios."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 flex items-center justify-center z-50 hover:scale-110"
      aria-label="Contactar por WhatsApp"
    >
      <FaWhatsapp size={28} />
    </a>
  );
}


