import React from "react";
import noImage from "../assets/img/no-image.png";

const ItemList = ({ animal }) => {
  let {
    id,
    name,
    breeds,
    species,
    primary_photo_cropped,
    gender,
    published_at,
    status_changed_at,
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
        <h4 className="name">{name}</h4>
        <div className="email">Goals: {gender}</div>
        <h3 className="age">Group: {species}</h3>
      </div>
      <div className="contact">
        <div className="dob-wrap">
          <div className="title">Start Date</div>
          <div className="phone desc">
            {new Date(published_at).toDateString()}
          </div>
        </div>
        <div className="dob-wrap">
          <div className="title">End Date</div>
          <div className="phone desc">
            {new Date(status_changed_at).toDateString()}
          </div>
        </div>
        <div className="manager-wrap">
          <div className="title">Manager</div>
          <div className="phone desc">{breeds && breeds.primary}</div>
        </div>
      </div>
    </div>
  );
};

export default ItemList;
