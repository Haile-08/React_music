import "./css/App.css";
import { useState, useEffect } from "react";
import Player from "./components/player";

function App() {
  const [songs, setSongs] = useState([
    {
      title: "Ed Sheeran - Shivers",
      artist: "Ed Sheeran",
      img: "./image/1img.jpg",
      src: "./audio/Ed Sheeran - Shivers.mp3",
    },
    {
      title: "Imagine Dragons - Enemy",
      artist: "Imagine Dragons",
      img: "./image/2img.jpg",
      src: "./audio/Imagine Dragons - Enemy.mp3",
    },
    {
      title: "Maluma - Hawái ",
      artist: "Maluma ",
      img: "./image/3img.jpg",
      src: "./audio/Maluma - Hawái.mp3",
    },
    {
      title: "Moneybagg Yo - Scorpio",
      artist: "Moneybagg Yo ",
      img: "./image/4img.jpg",
      src: "./audio/Moneybagg Yo - Scorpio.mp3",
    },
    {
      title: "The Weeknd - Blinding Lights",
      artist: "The Weeknd",
      img: "./image/5img.jpg",
      src: "./audio/The Weeknd - Blinding Lights.mp3",
    },
  ]);
  const [currentsongindex, setcurrentsongindex] = useState(0);
  const [nextsongindex, setnextsongindex] = useState(currentsongindex + 1);
  useEffect(() => {
    setnextsongindex(() => {
      if (currentsongindex + 1 > songs.length) {
        return 0;
      } else {
        return currentsongindex + 1;
      }
    });
  }, [currentsongindex]);
  return (
    <div className="App">
      <header className="App-header">
        <Player
          currentsongindex={currentsongindex}
          setcurrentsongindex={setcurrentsongindex}
          nextsongindex={nextsongindex}
          songs={songs}
        />
      </header>
    </div>
  );
}

export default App;
