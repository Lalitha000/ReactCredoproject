import React from "react";
import "./Card.css";
import styled from "styled-components";

const Imagetag = styled.img`
  width: 80%;
  height: 274px;
`;

const Badge = styled.span`
  height: fit-content;
`;

const Heading = styled.h2`
  font-size: 19px;
  margin: 8px;
`;

// const divtag = styled.div`
// text-align: center;
//     align-items: center;
//     width:200px;
// `;  //ask doubt

function CardDesign_one(props) {
  return (
    <>
      <div className="card p-3" id="card">
        {/* <img className="card-img-top" src="../../../assets/img1.png" alt="Card image"/> ask doubt */}
        <div className="card-img-overlay">
          <div className="d-flex justify-content-between">
            <Badge className="badge bg-secondary">{props.items.badge}</Badge>
            <div className="d-flex flex-column">
              <p id="sideicon">
                <span className="material-icons p-2">favorite_border</span>
              </p>
              <p id="sideicon">
                <span className="material-icons p-2">visibility</span>
              </p>
            </div>
          </div>
        </div>
        <Imagetag
          className="card-img-top"
          src={props.items.image}
          alt="Card image"
        />

        <div className="card-body" id="card_body">
          <Heading>{props.items.Title}</Heading>
          <div className="d-flex m-2">
            <span className="material-icons">star</span>
            <span className="material-icons">star</span>
            <span className="material-icons">star</span>
            <span className="material-icons">star</span>
            <span className="material-icons">star_border</span>
          </div>
          <p className="m-2">
            {props.items.price} <del>{props.items.original_price}</del>
          </p>
          <div className="d-flex justify-content-between">
            <button className="btn btn-outline-primary">Buy now </button>
            <button className="btn" id="sideicon">
              <span className="material-icons">shopping_cart</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardDesign_one;
