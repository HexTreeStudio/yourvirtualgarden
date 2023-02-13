import label from "../img/label_2.png";
import { useDispatch } from "react-redux";
import { setCrop } from "../store/slice/FieldSlice";

function SideLabel(props) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setCrop(props.cropType));
  };

  return (
    <div
      className="w-40 h-40  flex items-center relative"
      onClick={handleClick}
    >
      <img src={label} alt="label" />
      <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pt-2.5 cursor-pointer  ">
        {props.crop}
      </div>
    </div>
  );
}

export default SideLabel;
