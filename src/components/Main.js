import SideBar from "./SideBar";
import Fields from "./Fields";

function Main() {
  return (
    <div className="flex shadow-lg rounded-2xl max-[374px]:flex-col ">
      <SideBar />
      <Fields />
    </div>
  );
}

export default Main;
