import React, { useState, useRef, useEffect } from "react";

import PlayerDetails from "./playerDetails";
import Playercontrols from "./Playercontrols";
import "../css/player.css";
import { usePalette } from "react-palette";

function Player(props) {
  const audioEl = useRef(null);
  const [isplaying, setisplaying] = useState(false);

  useEffect(() => {
    if (isplaying) {
      audioEl.current.play();
    } else {
      audioEl.current.pause();
    }
  });
  const SkipSong = (forwards = true) => {
    if (forwards) {
      props.setcurrentsongindex(() => {
        let temp = props.currentsongindex;
        temp++;
        if (temp > props.songs.length - 1) {
          temp = 0;
        }
        return temp;
      });
    } else {
      props.setcurrentsongindex(() => {
        let temp = props.currentsongindex;
        temp--;

        if (temp < 0) {
          temp = props.songs.length - 1;
        }
        return temp;
      });
    }
  };
  const { data, loading, error } = usePalette(
    props.songs[props.currentsongindex].img
  );
  return (
    <div className="player-c" style={{ background: data.vibrant }}>
      <audio
        src={props.songs[props.currentsongindex].src}
        ref={audioEl}
      ></audio>
      <h4>paying now</h4>
      <PlayerDetails songs={props.songs[props.currentsongindex]} />
      <Playercontrols
        isplaying={isplaying}
        setisplaying={setisplaying}
        SkipSong={SkipSong}
      />
      <p>
        <strong>Next up:</strong>
        {props.songs[props.nextsongindex].title} by{" "}
        {props.songs[props.nextsongindex].artist}
      </p>
    </div>
  );
}

export default Player;
