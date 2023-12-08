import React from "react";
import { CloseButton } from "../Buttons/CloseButton";
import "../../index.css";
export const UpcomingMatches = ({
  id,
  name,
  date,
  opponent,
  date2,
  opponent2,
}) => {
  return (
    <div>
      <h2>{name} - Upcoming Matches</h2>
      <ul>
        <li>
          <span>Date: {date} </span>
          <span>Opponent: {opponent} </span>
        </li>
        <li>
          <span>Date: {date2} </span>
          <span>Opponent: {opponent2} </span>
        </li>
      </ul>
      <CloseButton id={id}></CloseButton>
    </div>
  );
};
