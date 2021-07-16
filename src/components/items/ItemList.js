import React from "react";
import { Link } from "react-router-dom";
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
    url,
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
          <div className="phone desc">
            {new Date(published_at).toDateString()}
          </div>
        </div>
        <div className="manager-wrap">
          <div className="title">Manager</div>
          <div className="phone desc">{breeds && breeds.primary}</div>
        </div>
        <div className="manager-wrap">
          <div className="title">Reference</div>
          <div className="phone desc">
            <Link to={url} className="desc" target="_blank">
              
              
              Click Here
            
            
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemList;
