import { React } from "react";

import PlayerDetails from "./playerDetails";
import Playercontrols from "./Playercontrols";
import "../css/player.css";
import { usePalette } from "react-palette";

function Player(props) {
  const { data, loading, error } = usePalette(props.songs.img);
  return (
    <div className="player-c" style={{ background: data.vibrant }}>
      <audio></audio>
      <h4>paying now</h4>
      <PlayerDetails songs={props.songs} />
      <Playercontrols songs={props.songs} />
      <p>
        <strong>Next up:</strong>
        {props.nextsong.title} by {props.nextsong.artist}
      </p>
    </div>
  );
}

export default Player;
