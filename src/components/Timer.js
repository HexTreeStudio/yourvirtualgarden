import { useState, useEffect } from "react";

const [time, setTime] = useState(10);

function setTimer() {
  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);

    return () => clearInterval(interval);
  }, []);
}
