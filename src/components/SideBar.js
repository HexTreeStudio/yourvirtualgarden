import SideLabel from "./SideLabel";
import { useSelector } from "react-redux";
import Carrot from "../img/carrot.png";
import Corn from "../img/corn.png";
import Pepper from "../img/chili.png";
import Wheat from "../img/wheat.png";

function SideBar() {
  const barState = useSelector((state) => state.sidebar);
  return (
    <div className="side-bar flex bg-orange-300 border-orange-900 py-10 justify-between min-[374px]:flex-col min-[374px]:border-y-4 min-[374px]:border-l-4 min-[374px]:rounded-l-2xl max-sm:py-2 max-[374px]:rounded-t-2xl max-[374px]:border-x-4 max-[374px]:border-t-4">
      <SideLabel
        crop={
          <img
            src={Carrot}
            className="w-fit rounded-lg p-2 bg-slate-200/50 max-lg:w-14 max-[430px]:w-11 "
            alt="carrot"
          />
        }
        cropType="carrot"
        state={barState[0]}
      />
      <SideLabel
        crop={
          <img
            src={Corn}
            className="w-fit  rounded-lg p-2 bg-slate-200/50 max-lg:w-14 max-[430px]:w-11 "
            alt="corn"
          />
        }
        cropType="corn"
        state={barState[1]}
      />
      <SideLabel
        crop={
          <img
            src={Pepper}
            className="w-fit  rounded-lg p-2 bg-slate-200/50 max-lg:w-14 max-[430px]:w-11 "
            alt="pepper"
          />
        }
        cropType="pepper"
        state={barState[2]}
      />
      <SideLabel
        crop={
          <img
            src={Wheat}
            className="w-fit rounded-lg p-2 bg-slate-200/50 max-lg:w-14  max-[430px]:w-11 "
            alt="wheat"
          />
        }
        cropType="wheat"
        state={barState[3]}
      />
    </div>
  );
}

export default SideBar;
