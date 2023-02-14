import { useState, useEffect } from "react";

import Field2 from "../img/field_2.jpg";
import Field3 from "../img/field_3.jpg";
import Field from "../img/field.jpg";

function GrowStage() {
  const [growStage, setGrowStage] = useState(0);
  let fieldImg;

  useEffect(() => {
    setTimeout(() => {
      setGrowStage((prev) => prev + 1);
    }, 2000);
    setTimeout(() => {
      setGrowStage((prev) => prev + 1);
    }, 6000);
  }, []);

  switch (growStage) {
    case 0:
      fieldImg = Field;
      break;
    case 1:
      fieldImg = Field2;
      break;
    case 2:
      fieldImg = Field3;
      break;
    default:
      fieldImg = Field;
  }

  return (
    <img
      src={fieldImg}
      alt="field"
      className="w-40 rounded-3xl max-sm:rounded-xl "
    />
  );
}

export default GrowStage;
