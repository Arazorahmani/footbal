import React from "react";

import "../../index.css";

export const CloseButton = ({id}) => {
    const handleHideMatches = ()=>{
      const matchPopup = document.getElementById(`matchPopup${id}`);
      matchPopup.classList.remove('show-match-popup');
      matchPopup.classList.add('match-popup');
    }
  return (
    <div>
      <button onClick={handleHideMatches}>Close</button>
    </div>
  );
};
