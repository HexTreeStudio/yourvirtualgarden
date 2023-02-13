import ReactDOM from "react-dom";

function Modal(props) {
  return ReactDOM.createPortal(
    <div>
      <div
        onClick={props.onClick}
        className=" absolute inset-0 bg-gray-300 opacity-80"
      ></div>
      <div className=" absolute w-[60rem] top-28 left-1/2 -translate-x-1/2 p-10 bg-white  rounded-3xl">
        <h1 className="text-4xl mb-20 text-center">
          Vítej v mojí React hře s názvem "Your Virtual Garden"
        </h1>
        <p className="text-2xl mb-2">Cílem hry je otevřít všechny sazenice.</p>
        <p className="text-2xl mb-14">Pravidla jsou jednoduchá:</p>
        <ol className="text-sm list-decimal list-outside flex flex-col gap-5">
          <li className="">Využij pole pro pěstování plodin.</li>
          <li>
            Semínka zasadíš tak, že klikneš na ikonku plodiny v pravém menu.
          </li>
          <li>Nezapomeň zasazená semínka zalít!</li>
          <li>Plodinu sklidíš tak, že na ní klikneš v místě kde rostla.</li>
          <li>
            Po sklizení min. 5 kusů si můžeš otevřít další plodinu v řadě.
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
          className=" absolute bottom-10 right-10 py-3 px-12 border-4 rounded-full border-green-500 hover:bg-gray-100 "
        >
          Zavřít
        </button>
      </div>
    </div>,
    document.querySelector(".modal-container")
  );
}

export default Modal;
