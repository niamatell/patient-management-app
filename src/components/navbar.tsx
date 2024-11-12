
import React, { useState, useEffect } from 'react';
import calendar from '../assets/calendar.svg';
import time from '../assets/time.svg';
import menu from '../assets/menu.svg';
import notif from '../assets/notif.svg';
import wifi from '../assets/wifi.svg';
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
/* Consider if this div is necessary */

const Navbar: React.FC = () => {
    const [currentDate, setCurrentDate] = useState<string>('');
    const [currentTime, setCurrentTime] = useState<string>('');
    const user = useSelector((state: RootState) => state.auth.user);
  
    useEffect(() => {
      const updateDateTime = () => {
        const now = new Date();
        setCurrentDate(now.toLocaleDateString('fr-FR', { weekday: 'long', month: 'long', day: 'numeric' }));
        setCurrentTime(now.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }));
      };
      updateDateTime();
      const intervalId = setInterval(updateDateTime, 1000);
      return () => clearInterval(intervalId);
    }, []);

  return (
    <header className={`relative w-full bg-custom-gradient shadow-custom p-4 flex items-center h-20 rounded-[16px] ${
      user ? "justify-between" : "justify-center"
    }`}>
      {user && (
        <div className="flex items-center gap-2">
          <img
            src={menu}
            alt="menu"
            className="w-14 h-14 cursor-pointer"
            role="button"
            aria-label="Open menu"
          />
        </div>
      )}
      <div className="flex justify-center items-center gap-10">
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
      </div></div>
      {user && (
        <div className="flex items-center gap-4">
          <img src={wifi} alt="Signal Icon" className="w-6 h-6" aria-hidden="true" />
          <img src={notif} alt="Notification Icon" className="w-6 h-6" aria-hidden="true" />
        </div>
      )}
    </header>
  );
};

export default Navbar;
