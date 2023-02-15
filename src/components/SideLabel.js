import label from "../img/label_2.png";
import { useDispatch, useSelector } from "react-redux";
import { setCrop } from "../store/slice/FieldSlice";
import { GiPadlock } from "react-icons/gi";
import { unlock } from "../store/slice/SideBarSlice";

function SideLabel(props) {
  const gatheredCrops = useSelector((state) => state.labels);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setCrop(props.cropType));
  };

  const handleUnlock = (cropType) => {
    if (cropType === "corn" && gatheredCrops[0].value >= 5) {
      dispatch(unlock(cropType));
    } else if (cropType === "pepper" && gatheredCrops[2].value >= 5) {
      dispatch(unlock(cropType));
    } else if (cropType === "wheat" && gatheredCrops[3].value >= 5) {
      dispatch(unlock(cropType));
    }
  };

  if (props.state.isLocked) {
    return (
      <div
        className="w-36 h-36 max-lg:w-24 max-lg:h-24 max-[430px]:w-20 max-[430px]:h-20 flex items-center relative"
        onClick={() => handleUnlock(props.cropType)}
      >
        <img src={label} alt="label" />
        <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pt-2.5 max-sm:pt-1.5  cursor-pointer  ">
          <GiPadlock className="w-20 h-20 max-lg:w-14 max-lg:h-14 max-[430px]:w-9 max-[430px]:h-9" />
        </div>
      </div>
    );
  } else {
    return (
      <div
        className="w-36 h-36 max-lg:w-24 max-lg:h-24 max-[430px]:w-20 max-[430px]:h-20 flex items-center relative"
        onClick={handleClick}
      >
        <img src={label} alt="label" />
        <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pt-2.5 max-sm:pt-1.5 cursor-pointer  ">
          {props.crop}
        </div>
      </div>
    );
  }
}

export default SideLabel;
