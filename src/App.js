import React from "react";
import Team1Image from "./assets/images/barca.png";
import Team2Image from "./assets/images/real.png";
import Team3Image from "./assets/images/man.png";
import { Header } from "./Components/Cards/Header";
import { ItemsOfCards } from "./Components/Cards/ItemsOfCards";
const teamsData = [
  {
    id: 1,
    name: "Team 1",
    image: Team1Image,
    matches: [
      { date: "2023-08-01", opponent: "Team 2" },
      { date: "2023-08-10", opponent: "Team 3" },
    ],
  },
  {
    id: 2,
    name: "Team 2",
    image: Team2Image,
    matches: [
      { date: "2023-08-05", opponent: "Team 1" },
      { date: "2023-08-15", opponent: "Team 3" },
    ],
  },
  {
    id: 3,
    name: "Team 3",
    image: Team3Image,
    matches: [
      { date: "2023-08-12", opponent: "Team 1" },
      { date: "2023-08-20", opponent: "Team 2" },
    ],
  },
  // Add more teams here...
];

function App() {
  return (
    <div className="app">
      <Header id={teamsData[0].id} />
      <div className="teams-container">
        <ItemsOfCards teamsData={teamsData}></ItemsOfCards>
      </div>
    </div>
  );
}
export default App;
