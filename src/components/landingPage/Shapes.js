import { Fragment } from "react";

import semiCircle from "../../assets/semi circle.svg";
import circle from "../../assets/circle.svg";
import squiggly from "../../assets/squiggly.svg";
import triangle from "../../assets/triangle.svg";
import "../../styles/landingPage/shapes.css";

const Shapes = () => {
  return (
    <Fragment>
      <img src={semiCircle} className={"shape shape--0"} />
      <img src={circle} className={"shape shape--1"} />
      <img src={squiggly} className={"shape shape--2"} />
      <img src={circle} className={"shape shape--3"} />
      <img src={triangle} className={"shape shape--4"} />
      <img src={circle} className={"shape shape--5"} />
      <img src={squiggly} className={"shape shape--6"} />
      <img src={circle} className={"shape shape--7"} />
      <img src={semiCircle} className={"shape shape--8"} />
    </Fragment>
  );
};

export default Shapes;
