import React from "react";
import noImage from "../assets/img/no-image.png";

const ItemList = ({ animal }) => {
  console.log(animal);
  let {
    id,
    name,
    breeds,
    species,
    primary_photo_cropped,
    gender,
    published_at,
    status,
  } = animal;

  return (
    <div className="user shadow" id={id}>
      <div className="top">
        <div className="photo-wrap">
          <img
            src={primary_photo_cropped ? primary_photo_cropped.medium : noImage}
            alt="name___image"
          />
        </div>
        <h5 className="name">{name}</h5>
        <div className="email">Goals: {gender}</div>
        <h3 className="age">Group: {species}</h3>
      </div>
      <div className="contact">
        <div className="dob-wrap">
          <div className="title">Date Created</div>
          <div className=" desc">
            {new Date(published_at).toDateString()}
          </div>
        </div>
        <div className="manager-wrap">
          <div className="title">Manager</div>
          <div className=" desc">{breeds && breeds.primary}</div>
        </div>

        <div className="manager-wrap">
          <div className="title">Status</div>
          <div className=" desc">{status}</div>
        </div>
      
      </div>
    </div>
  );
};

export default ItemList;
