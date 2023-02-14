import ReactDOM from "react-dom";

function Modal(props) {
  return ReactDOM.createPortal(
    <div>
      <div
        onClick={props.onClick}
        className=" absolute inset-0 bg-gray-300 opacity-80"
      ></div>
      <div className=" absolute w-[60rem] max-lg:w-[35rem] max-sm:w-full max-sm:h-full top-20 max-sm:top-0  max-lg:top-14 max-sm:top-6 left-1/2 -translate-x-1/2 p-10 bg-white  sm:rounded-3xl max-sm:p-6">
        <h1 className="text-4xl max-lg:text-2xl max-sm:text-base mb-20 max-lg:mb-12  max-sm:mb-6 text-center">
          Vítej v mojí React hře s názvem "Your Virtual Garden"
        </h1>
        <p className="text-2xl max-lg:text-xl max-sm:text-sm mb-2">
          Cílem hry je otevřít všechny sazenice.
        </p>
        <p className="text-2xl max-lg:text-xl max-sm:text-sm mb-14 max-lg:mb-8">
          Pravidla jsou jednoduchá:
        </p>
        <ol className="text-sm max-sm:text-xs list-decimal list-inside flex flex-col gap-5 max-lg:gap-3 max-sm:gap-1  mb-14 max-sm:mb-20">
          <li className="">Využij pole pro pěstování plodin.</li>
          <li>
            Semínka zasadíš tak, že klikneš na ikonku plodiny v levém menu.
          </li>
          <li>Nezapomeň zasazená semínka zalít!</li>
          <li>Plodinu sklidíš tak, že na ní klikneš v místě kde rostla.</li>
          <li>
            Po sklizení min. 5 kusů si můžeš otevřít další plodinu ve sloupci.
          </li>
          <li>Novou plodinu otevřeš tak, že klikneš na zámek.</li>
          <li>Pokračuješ tak dlouho, dokud nemáš otevřeny všechny plodiny</li>
          <li>
            Až otevřeš všechny plodiny, můžeš pokračovat v sázení a nebo hru
            zavřít.
          </li>
        </ol>

        <button
          onClick={props.onClick}
          className=" absolute bottom-10 right-10 py-3 px-12 border-4 rounded-full border-green-500 hover:bg-gray-100 max-sm:text-xs max-sm:right-1/2 max-sm:translate-x-1/2 "
        >
          Zavřít
        </button>
      </div>
    </div>,
    document.querySelector(".modal-container")
  );
}

export default Modal;
