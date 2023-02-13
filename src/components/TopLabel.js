import label from "../img/label_1.png";
function TopLabel({ value, icon }) {
  return (
    <div className="lg:w-40 md:w-28 relative">
      <img src={label} alt="label" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="flex justify-between items-center w-24">
          {icon}
          <span className="text-2xl">{value}</span>
        </div>
      </div>
    </div>
  );
}

export default TopLabel;
