import { useState } from "react";
import Modal from "./Modal";
import { Fragment } from "react";

function ModalPage() {
  const [isVisible, setIsVisible] = useState(true);

  const togleVisibility = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <Fragment>
      {isVisible && <Modal onClick={togleVisibility} />}
      {isVisible || (
        <button
          onClick={togleVisibility}
          className="absolute right-5 top-[7.5rem]  p-2 border-green-500  bg-gray-200 hover:bg-gray-100 border-4 rounded-full text-xs font-['Bungee']"
        >
          Otevřít nápovědu
        </button>
      )}
    </Fragment>
  );
}

export default ModalPage;
