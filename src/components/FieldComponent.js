import SetTimer from "../components/Timer";
import Field from "../img/field.jpg";
import "./FieldComponent.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setWater, resetField, setGrowing } from "../store/slice/FieldSlice";
import { setValue } from "../store/slice/LabelSlice";
import { GiDrop } from "react-icons/gi";
import GrowStage from "./GrowStage";
import Carrot from "../img/carrot.png";
import Corn from "../img/corn.png";
import Pepper from "../img/chili.png";
import Wheat from "../img/wheat.png";

function FieldComponent({ id }) {
  const dispatch = useDispatch();
  const fieldData = useSelector((state) => state.fields[id]);

  let waterCan;
  let crop;
  let cropContent;
  let fieldImg = Field;

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
        className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2   cursor-water w-1/2 h-1/2"
        onClick={handleClick}
      >
        <GiDrop className=" h-20 w-20 text-sky-500 animate-bounce w-full h-full" />
      </div>
    );
  }

  switch (fieldData.crop) {
    case "carrot":
      crop = (
        <div
          className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-set w-1/2 h-1/2 "
          onClick={() => gatherCrop("carrot")}
        >
          <img
            src={Carrot}
            className=" w-full h-full p-2 bg-slate-200/40 rounded-xl max-[420px]:scale-125"
            alt="carrot"
          />
        </div>
      );
      break;
    case "corn":
      crop = (
        <div
          className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-set w-1/2 h-1/2"
          onClick={() => gatherCrop("corn")}
        >
          <img
            src={Corn}
            className="w-full h-full p-2 bg-slate-200/40 rounded-xl max-[420px]:scale-125"
            alt="corn"
          />
        </div>
      );
      break;
    case "pepper":
      crop = (
        <div
          className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-set w-1/2 h-1/2"
          onClick={() => gatherCrop("pepper")}
        >
          <img
            src={Pepper}
            className="w-full h-full p-2 bg-slate-200/40 rounded-xl max-[420px]:scale-125"
            alt="pepper"
          />
        </div>
      );
      break;
    case "wheat":
      crop = (
        <div
          className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2   cursor-set w-1/2 h-1/2"
          onClick={() => gatherCrop("wheat")}
        >
          <img
            src={Wheat}
            className="w-full h-full p-2 bg-slate-200/40 rounded-xl max-[420px]:scale-125"
            alt="wheat"
          />
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

  const imageFiled =
    fieldData.isGrowing || fieldData.isWatered ? (
      <GrowStage />
    ) : (
      <img
        src={fieldImg}
        alt="field"
        className="w-40 rounded-3xl max-sm:rounded-xl"
      />
    );

  return (
    <div className="relative text-center">
      {imageFiled}
      {waterCan}
      {cropContent}
    </div>
  );
}

export default FieldComponent;
