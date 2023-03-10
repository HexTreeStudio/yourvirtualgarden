import TopLabel from "./TopLabel";
import { useSelector } from "react-redux";
import { GiChiliPepper, GiCarrot, GiCorn, GiWheat } from "react-icons/gi";

function Navbar() {
  const values = useSelector((state) => state.labels);
  return (
    <header className="bg-orange-300 h-28 border-4 border-orange-900 rounded-2xl flex items-center justify-between mb-10 shadow-lg">
      <span className="text-2xl text-center p-2 font-['Bungee'] max-lg:text-xl max-md:text-xl w-60 max-sm:w-36 max-[430px]:text-base max-[430px]:w-18">
        Virtuální zahrada
      </span>
      <nav className="flex mx-5 gap-5 max-lg:gap-1 max-sm:grid-cols-2 max-sm:grid max-[430px]:mx-2 ">
        <TopLabel
          value={values[0].value}
          icon={
            <GiCarrot className="text-2xl max-lg:text-xl max-[374px]:text-base" />
          }
        />
        <TopLabel
          value={values[2].value}
          icon={
            <GiCorn className="text-2xl max-lg:text-xl max-[374px]:text-base" />
          }
        />
        <TopLabel
          value={values[3].value}
          icon={
            <GiChiliPepper className="text-2xl max-lg:text-xl max-[374px]:text-base" />
          }
        />
        <TopLabel
          value={values[1].value}
          icon={
            <GiWheat className="text-2xl max-lg:text-xl max-[374px]:text-base" />
          }
        />
      </nav>
    </header>
  );
}

export default Navbar;
