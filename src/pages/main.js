import React from "react";
/*import { Link } from "react-router-dom";*/

import MainSide from "./component/side/main_side";

const main = (p) => {
  console.log(p.name);
  return (
      <MainSide/>
  );
};

export default main;
