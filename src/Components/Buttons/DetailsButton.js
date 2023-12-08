import React from "react";
import "../../index.css";
export const DetailsButton=({id})=>{
  const handleShowMatches=()=>{
    const matchPopup = document.getElementById(`matchPopup${id}`);
      matchPopup.classList.add(`show-match-popup`);
      
    }
    return(
      <div>
         <button onClick={handleShowMatches} >Details</button>
        </div>
    )
};   
