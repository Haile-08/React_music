import { React } from "react";

import PlayerDetails from "./playerDetails";

function Player(props) {
  return (
    <div className="player-c">
      <audio></audio>
      <h4>paying now</h4>
      <PlayerDetails songs={props.songs} />
      {/* Controles */}
      <p>
        <strong>Next up:</strong>
        {props.nextsong.title} by {props.nextsong.artist}
      </p>
    </div>
  );
}

export default Player;
