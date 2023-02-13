import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Modal from "./components/Modal";
import { useState, useEffect } from "react";

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);
  document.addEventListener(
    "mousedown",
    function (event) {
      if (event.detail > 1) {
        event.preventDefault();
        // of course, you still do not know what you prevent here...
        // You could also check event.ctrlKey/event.shiftKey/event.altKey
        // to not prevent something useful.
      }
    },
    false
  );

  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <div className="max-w-7xl h-screen p-2 m-auto">
      <Navbar />
      <Main />
      {isVisible && <Modal onClick={toggleVisibility} />}
      {isVisible || (
        <button
          onClick={toggleVisibility}
          className="absolute right-5 bottom-5 p-2 border-green-500 hover:bg-gray-100 border-4 rounded-full"
        >
          Otevřít nápovědu
        </button>
      )}
    </div>
  );
}

export default App;
