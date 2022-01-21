import React, { useEffect, useState } from "react";
import useTime from "../../../hooks/time-hook";

function CurrentTime() {
  const { currentTime } = useTime();
  // Create a new JavaScript Date object based on the timestamp
  // multiplied by 1000 so that the argument is in milliseconds, not seconds.
  var date = new Date(currentTime * 1000);
  // Hours part from the timestamp
  var hours = date.getHours();
  // Minutes part from the timestamp
  var minutes = "0" + date.getMinutes();
  // Seconds part from the timestamp
  var seconds = "0" + date.getSeconds();

  // Will display time in 10:30:23 format
  var formattedTime =
    hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);

  return <div>{formattedTime} UTC-3</div>;
}

export default CurrentTime;
