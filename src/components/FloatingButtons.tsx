import React, { useState, useEffect } from 'react';
import {  Phone } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const FloatingButtons: React.FC = () => {
  return (
    <>

      {/* WhatsApp Button (left) */}
      <button
        onClick={() => window.open('https://wa.me/966533441300', '_blank')}
        className="fixed left-4 bottom-6 z-50 bg-green-600 hover:bg-green-700 text-white p-3 rounded-full shadow-lg transition-all transform hover:scale-110"
        aria-label="تواصل عبر واتساب"
      >
        <FaWhatsapp className="h-5 w-5" />
      </button>

      {/* Call Button (right) */}
      <button
        onClick={() => window.open('tel:0533441300')}
        className="fixed right-4 bottom-6 z-50 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all transform hover:scale-110"
        aria-label="اتصال هاتفي 0533441300"
      >
        <Phone className="h-5 w-5" />
      </button>

      
    </>
  );
};

export default FloatingButtons;