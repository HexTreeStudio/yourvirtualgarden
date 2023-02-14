import SideLabel from "./SideLabel";
import { GiChiliPepper, GiCarrot, GiCorn, GiWheat } from "react-icons/gi";
import { useSelector } from "react-redux";

function SideBar() {
  const barState = useSelector((state) => state.sidebar);
  return (
    <div className="flex flex-col bg-orange-300 border-y-4 border-l-4 border-orange-900 rounded-l-2xl py-10 max-sm:py-2 justify-between ">
      <SideLabel
        crop={
          <GiCarrot className="w-20 h-20 max-lg:w-14 max-lg:h-14 max-[430px]:w-11 max-[430px]:h-11  text-orange-500 bg-yellow-900 rounded-lg p-2" />
        }
        cropType="carrot"
        state={barState[0]}
      />
      <SideLabel
        crop={
          <GiCorn className="w-20 h-20 max-lg:w-14 max-lg:h-14 max-[430px]:w-11 max-[430px]:h-11 text-yellow-500 bg-yellow-900 rounded-lg p-2" />
        }
        cropType="corn"
        state={barState[1]}
      />
      <SideLabel
        crop={
          <GiChiliPepper className="w-20 h-20 max-lg:w-14 max-lg:h-14 max-[430px]:w-11 max-[430px]:h-11 text-red-500 bg-yellow-900 rounded-lg p-2" />
        }
        cropType="pepper"
        state={barState[2]}
      />
      <SideLabel
        crop={
          <GiWheat className="w-20 h-20 max-lg:w-14 max-lg:h-14 max-[430px]:w-11 max-[430px]:h-11 text-yellow-600 bg-yellow-900 rounded-lg p-2" />
        }
        cropType="wheat"
        state={barState[3]}
      />
    </div>
  );
}

export default SideBar;
