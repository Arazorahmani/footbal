import React from "react";
import { Card } from "./Card";
import "../../index.css";
export const ItemsOfCards = (props) => {
  return (
    <div className="teams-container">
      <Card
        id={props.teamsData[0].id}
        name={props.teamsData[0].name}
        image={props.teamsData[0].image}
        date={props.teamsData[0].matches[0].date}
        opponent={props.teamsData[0].matches[0].opponent}
        date2={props.teamsData[0].matches[1].date}
        opponent2={props.teamsData[0].matches[1].opponent}
      />

      <Card
        id={props.teamsData[1].id}
        name={props.teamsData[1].name}
        image={props.teamsData[1].image}
        date={props.teamsData[1].matches[0].date}
        opponent={props.teamsData[1].matches[0].opponent}
        date2={props.teamsData[1].matches[1].date}
        opponent2={props.teamsData[1].matches[1].opponent}
      />

      <Card
        id={props.teamsData[2].id}
        name={props.teamsData[2].name}
        image={props.teamsData[2].image}
        date={props.teamsData[2].matches[0].date}
        opponent={props.teamsData[2].matches[0].opponent}
        date2={props.teamsData[2].matches[1].date}
        opponent2={props.teamsData[2].matches[1].opponent}
      />
    </div>
  );
};
