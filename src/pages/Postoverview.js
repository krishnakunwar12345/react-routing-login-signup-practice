import React from "react";
import Card from "../components/card";
const Postoverview = () => {
  return (
    <div className="container mt-md-5 mt-3">
      <div className="row">
        <div className="col-md-4 mb-2">
          <Card />
        </div>
        <div className="col-md-4 mb-2">
          <Card />
        </div>
        <div className="col-md-4 mb-2">
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Postoverview;
