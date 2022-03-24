import { React } from "react";

import "../css/playerDetails.css";

function PlayerDetails(props) {
  return (
    <div className="player-Details-c">
      <div className="details-image">
        <img src={props.songs.img} alt="" />
      </div>
      <h3 className="details-title">{props.songs.title}</h3>
      <h4 className="details-artist">{props.songs.artist}</h4>
    </div>
  );
}

export default PlayerDetails;
