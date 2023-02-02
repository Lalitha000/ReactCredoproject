import React from "react";
import CardDesign_one from "../shared/components/cards/cardDesign_one";
import Collection from "../shared/utility/data";

function Homepage() {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          {Collection.map((item, index) => (
            <div className="col-md-3 col-lg-3 col-sm-12 mb-3">
              <CardDesign_one items={item} key={index} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Homepage;
