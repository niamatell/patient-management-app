
import React, { useState, useEffect } from 'react';
import calendar from '../assets/calendar.svg';
import time from '../assets/time.svg';

const Navbar: React.FC = () => {
    const [currentDate, setCurrentDate] = useState<string>('');
    const [currentTime, setCurrentTime] = useState<string>('');
  
    useEffect(() => {
      const updateDateTime = () => {
        const now = new Date();
        setCurrentDate(now.toLocaleDateString('fr-FR', { weekday: 'long', month: 'long', day: 'numeric' }));
        setCurrentTime(now.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }));
      };
  
      updateDateTime(); // Set initial date and time
  
      const intervalId = setInterval(updateDateTime, 1000);
      return () => clearInterval(intervalId);
    }, []);

  return (
    <header className="relative w-full bg-custom-gradient p-4 flex items-center h-[70px] justify-center rounded-[16px]">
      <div className="flex items-center gap-2">
        <img src={calendar} alt="calendar-icon" />
        <span className="text-tail-blue text-[24px] leading-[18.56px] font-inter font-normal capitalize ">
          {currentDate} 
        </span>
      </div>
      <div className="mx-6"></div> {/* Consider if this div is necessary */}

      <div className="flex items-center gap-2">
        <img src={time} alt="time-icon" />
        <span className="text-tail-blue text-[24px] leading-[18px] font-inter font-normal ">
          {currentTime} 
        </span>
      </div>
    </header>
  );
};

export default Navbar;
