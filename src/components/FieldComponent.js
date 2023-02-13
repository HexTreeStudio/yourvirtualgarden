import Countdown from "react-countdown";

import Field from "../img/field.png";
import "./FieldComponent.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setWater, resetField } from "../store/slice/FieldSlice";
import { setValue } from "../store/slice/LabelSlice";
import {
  GiDrop,
  GiChiliPepper,
  GiCarrot,
  GiCorn,
  GiWheat,
} from "react-icons/gi";

function FieldComponent({ id }) {
  const dispatch = useDispatch();
  const fieldData = useSelector((state) => state.fields[id]);

  let waterCan;
  let crop;
  let isGrowing;

  const handleClick = () => {
    dispatch(setWater(id));
    isGrowing = true;
  };

  const gatherCrop = (crop) => {
    dispatch(resetField(id));
    dispatch(setValue(crop));
  };

  if (fieldData.crop !== "") {
    waterCan = fieldData.isWatered || (
      <div
        className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2   cursor-water "
        onClick={handleClick}
      >
        <GiDrop className=" h-20 w-20 text-sky-500 animate-bounce" />
      </div>
    );
  }

  switch (fieldData.crop) {
    case "carrot":
      crop = (
        <div
          className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-set"
          onClick={() => gatherCrop("carrot")}
        >
          <GiCarrot className="h-28 w-28 text-orange-500" />
        </div>
      );
      break;
    case "corn":
      crop = (
        <div
          className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-set"
          onClick={() => gatherCrop("corn")}
        >
          <GiCorn className="h-28 w-28 text-yellow-500" />
        </div>
      );
      break;
    case "pepper":
      crop = (
        <div
          className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-set"
          onClick={() => gatherCrop("pepper")}
        >
          <GiChiliPepper className="h-28 w-28 text-red-500" />
        </div>
      );
      break;
    case "wheat":
      crop = (
        <div
          className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2   cursor-set"
          onClick={() => gatherCrop("wheat")}
        >
          <GiWheat className="h-28 w-28 text-yellow-600" />
        </div>
      );
      break;
    default:
  }

  return (
    <div className="relative text-center">
      <img src={Field} alt="field" className="shadow-2xl" />
      {waterCan}
      {fieldData.isWatered && crop}
    </div>
  );
}

export default FieldComponent;
