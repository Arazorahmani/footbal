import React from "react";
import "../../index.css";
import { Team } from "./Team";
import { UpcomingMatches } from "./UpcomingMatches";

export const Card = ({ id, name, image, date, opponent, date2, opponent2 }) => {
  return (
    <div className="team-card" id={`teamcard${id}`}>
      <Team id={`${id}`} name={name} image={image} />
      <div id={`matchPopup${id}`} className="match-popup hidden">
        <div className="match-popup-content">
          <UpcomingMatches
            id={id}
            name={name}
            date={date}
            opponent={opponent}
            date2={date2}
            opponent2={opponent2}
          />
        </div>
      </div>
    </div>
  );
};
