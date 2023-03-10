import Navbar from "./components/Navbar";
import Main from "./components/Main";
import ModalPage from "./components/ModalPage";

function App() {
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
  window.ondragstart = function () {
    return false;
  };

  return (
    <div className="max-w-7xl h-screen p-2 m-auto">
      <Navbar />
      <Main />
      <ModalPage />
    </div>
  );
}

export default App;
