import React, { createContext, useState, useCallback } from "react";
import api from "../services/api";

export const TimeContext = createContext({
  current_time: undefined,
});

const TimeProvider = ({ children }) => {
  const [timeState, setTimeState] = useState({
    current_time: undefined,
  });

  const _api = new api();

  const getTime = async () => {
    var _time = await (await _api.getTime()).data;
    setTimeState({ current_time: _time });
  };

  const value = {
    timeState,
    getTime: useCallback(() => {
      getTime();
    }, []),
  };

  return <TimeContext.Provider value={value}>{children}</TimeContext.Provider>;
};

export default TimeProvider;
