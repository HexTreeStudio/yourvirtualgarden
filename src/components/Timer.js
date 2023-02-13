import { useState, useEffect } from "react";

function SetTimer() {
  const [counter, setCounter] = useState(10);

  // Third Attempts
  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  return (
    <span className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl ">
      {counter}
    </span>
  );
}

export default SetTimer;
