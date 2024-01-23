import "./App.css";
import { buttons } from "./consts";
import { useEffect, useState } from "react";
import PadBank from "./PadBank";
import Display from "./Display";

function App() {
  const [display, setDisplay] = useState("");
  const [volume, setVolume] = useState("");

  function handleChange(event) {
    const newVolume = event.target.value;
    setVolume(newVolume);
    const audios = document.getElementsByClassName("clip");
    for (let i = 0; i < audios.length; i++) {
      audios[i].volume = newVolume;
    }
    setDisplay("Volume: " + Math.round(newVolume * 100 * 100) / 100);
  }

  function playAudio(button) {
    debugger;
    const audio = document.getElementById(button.idAudio);
    audio.play();
    audio.parentElement.focus();
    setDisplay(button.audioName);
  }

  useEffect(() => {
    document.addEventListener("keydown", (event) => {
      for (let i = 0; i < buttons.length; i++) {
        if (
          event.key === buttons[i].idAudio ||
          event.key === buttons[i].idAudio.toLowerCase()
        ) {
          playAudio(buttons[i]);
          return;
        }
      }
    });
  }, []);

  return (
    <div id="container">
      <div id="drum-machine">
        <PadBank onPlay={playAudio} />
        <Display
          text={display}
          volumeValue={volume}
          onVolumeChange={handleChange}
          onMoveEnd={() => setDisplay("")}
        />
      </div>
    </div>
  );
}

export default App;
