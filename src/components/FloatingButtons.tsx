import React, { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const FloatingButtons: React.FC = () => {
  const [showCallButton, setShowCallButton] = useState(false);

  useEffect(() => {
    // Function to check if current time is between 8:00 AM and 9:00 PM Saudi time
    const checkBusinessHours = () => {
      // Create a date object with Saudi Arabia timezone (Asia/Riyadh)
      const now = new Date().toLocaleString('en-US', { timeZone: 'Asia/Riyadh' });
      const currentTime = new Date(now);
      const currentHour = currentTime.getHours();

      // Show call button between 8:00 AM (8) and 9:00 PM (21)
      setShowCallButton(currentHour >= 8 && currentHour < 21);
    };

    // Check immediately when component mounts
    checkBusinessHours();

    // Set up interval to check every minute
    const intervalId = setInterval(checkBusinessHours, 60000);

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      {/* WhatsApp Button (left) - shown between 9:00 PM and 8:00 AM */}
      {!showCallButton && (
        <button
          id="whatsapp-floating-button"
          onClick={() => window.open('https://wa.me/966533441300', '_blank')}
          className="fixed left-4 bottom-6 z-50 bg-green-600 hover:bg-green-700 text-white p-3 rounded-full shadow-lg transition-all transform hover:scale-110"
          aria-label="تواصل عبر واتساب"
        >
          <FaWhatsapp className="h-5 w-5" />
        </button>
      )}

      {/* Call Button (right) - shown between 8:00 AM and 9:00 PM */}
      {showCallButton && (
        <button
          id="call-floating-button"
          onClick={() => window.open('tel:0533441300')}
          className="fixed right-4 bottom-6 z-50 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all transform hover:scale-110"
          aria-label="اتصال هاتفي 0533441300"
        >
          <Phone className="h-5 w-5" />
        </button>
      )}
    </>
  );
};

export default FloatingButtons;