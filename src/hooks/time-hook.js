import { useContext } from "react";
import { TimeContext } from "../providers/time-context";

const useTime = () => {
  const { currentTime, fetchTime } = useContext(TimeContext);

  return { currentTime, fetchTime };
};

export default useTime;
