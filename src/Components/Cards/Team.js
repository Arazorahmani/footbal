import React from "react";
import { DetailsButton } from "../Buttons/DetailsButton";
import "../../index.css";
import { DeleteButton } from "../Buttons/DeleteButton";

export const Team = ({ id, image, name }) => {
  return (
    <div>
      <img src={image} alt="Team Name" />
      <h2>{name}</h2>
      <div className="teams-container">
        <DetailsButton id={id} />
        <DeleteButton id={id} />
      </div>
    </div>
  );
};
