import Grass from "../img/grass.png";

import FieldComponent from "./FieldComponent";

function Fields() {
  return (
    <div
      style={{ backgroundImage: `url(${Grass})` }}
      className="basis-full bg-orange-300 border-4 border-orange-900 rounded-r-2xl py-20 px-20 text-center "
    >
      <div className="grid grid-cols-3  gap-10 auto-cols-fr  inline-grid">
        <FieldComponent id={0} />
        <FieldComponent id={1} />
        <FieldComponent id={2} />
        <FieldComponent id={3} />
        <FieldComponent id={4} />
        <FieldComponent id={5} />
        <FieldComponent id={6} />
        <FieldComponent id={7} />
        <FieldComponent id={8} />
      </div>
    </div>
  );
}

export default Fields;
