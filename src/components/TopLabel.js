import label from "../img/label_1.webp";
function TopLabel({ value, icon }) {
  return (
    <div className="w-40 max-lg:w-32 max-md:w-28 relative max-[374px]:w-20 ">
      <img src={label} alt="label" className="w-full h-full" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="flex justify-between items-center w-24 max-lg:w-20 max-[374px]:w-14">
          {icon}
          <span className="text-2xl font-['Bungee'] max-lg:text-xl max-md:text-base max-[374px]:text-xs">
            {value}
          </span>
        </div>
      </div>
    </div>
  );
}

export default TopLabel;
