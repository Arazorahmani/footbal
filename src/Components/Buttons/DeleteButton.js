import React from "react";
import "../../index.css";

export const DeleteButton=({id})=>{  
  function handleHideCard(){
    const teamCard = document.getElementById(`teamcard${id}`);
    teamCard.style.display = 'none';
  }
    return(
      <div>
        <button onClick={handleHideCard}>Delete</button>
        </div>
    )
};