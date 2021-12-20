import React, { useEffect, useState } from "react";
import api from "../../../services/api";

const CurrentTime = () => {
  const [currentTime, setCurrentTime] = useState("0");
  const [async, setAsync] = useState(true);
  const _api = new api();

  useEffect(() => {
    const fetchTime = async () => {
      var time = await (await _api.getUnixTime()).data;
      setCurrentTime(time);
    };

    if (async) {
      fetchTime();
      setAsync(false);
    }
  }, []);

  // useEffect(() => {
  //   setInterval(() => {
  //     setCurrentTime(currentTime-1);
  //   }, 1000);
  // },[currentTime])

  return <div>{currentTime}</div>;
};

export default CurrentTime;
