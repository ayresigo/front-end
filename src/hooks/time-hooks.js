import { useContext } from "react";
import { TimeContext } from "../providers/time-context";

const useTime = () => {
  const { timeState, getTime } = useContext(TimeContext);

  return { timeState, getTime };
};

export default useTime;
