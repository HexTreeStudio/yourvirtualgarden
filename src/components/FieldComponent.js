import SetTimer from "../components/Timer";
import Field from "../img/field.png";
import "./FieldComponent.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setWater, resetField, setGrowing } from "../store/slice/FieldSlice";
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
  let cropContent;

  const handleClick = () => {
    dispatch(setWater(id));
    dispatch(setGrowing(id));
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

  if (fieldData.isWatered) {
    if (fieldData.isGrowing) {
      cropContent = <SetTimer />;
      setTimeout(() => {
        dispatch(setGrowing(id));
      }, 10000);
    } else {
      cropContent = crop;
    }
  }

  return (
    <div className="relative text-center">
      <img src={Field} alt="field" className="shadow-2xl" />
      {waterCan}
      {/* {fieldData.isWatered && crop} */}
      {cropContent}
    </div>
  );
}

export default FieldComponent;
