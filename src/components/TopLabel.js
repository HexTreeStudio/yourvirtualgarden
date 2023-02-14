import label from "../img/label_1.png";
function TopLabel({ value, icon }) {
  return (
    <div className="w-40 max-lg:w-32 max-md:w-28 relative">
      <img src={label} alt="label" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="flex justify-between items-center w-24 max-lg:w-20">
          {icon}
          <span className="text-2xl max-lg:text-xl max-md:text-base font-['Bungee']">
            {value}
          </span>
        </div>
      </div>
    </div>
  );
}

export default TopLabel;
