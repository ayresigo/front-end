import React, { createContext, useCallback, useEffect, useState } from "react";
import api from "../services/api";

export const TimeContext = createContext();

const TimeProvider = ({ children }) => {
  const [currentTime, setCurrentTime] = useState(Math.floor(Date.now() / 1000));

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentTime(Math.floor(Date.now() / 1000));
    }, 1000);

    return () => clearTimeout(timer);
  }, [currentTime]);

  const value = {
    currentTime,
  };

  return (
    <TimeContext.Provider value={value}> {children} </TimeContext.Provider>
  );
};

export default TimeProvider;
