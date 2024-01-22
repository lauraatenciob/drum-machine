import "./App.css";
import { buttons } from "./consts";
import { useEffect } from "react";
import { useState } from "react";

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

  function playAudio(id) {
    const audio = document.getElementById(id);
    audio.play();
    audio.parentElement.focus();
    let currentAudio = buttons.find((element) => id === element.idAudio);
    setDisplay(currentAudio.audioName);
  }

  useEffect(() => {
    document.addEventListener("keydown", (event) => {
      for (let i = 0; i < buttons.length; i++) {
        if (
          event.key === buttons[i].idAudio ||
          event.key === buttons[i].idAudio.toLowerCase()
        ) {
          playAudio(buttons[i].idAudio);
          return;
        }
      }
    });
  }, []);

  return (
    <div id="container">
      <div id="drum-machine">
        <div id="button-container">
          {buttons.map((element) => (
            <button
              id={element.idButton}
              className="drum-pad"
              onClick={() => playAudio(element.idAudio)}
            >
              <audio
                src={element.link}
                id={element.idAudio}
                className="clip"
              ></audio>
              {element.idAudio}
            </button>
          ))}
        </div>
        <div id="display-container">
          <div id="display">
            <p>{display}</p>
          </div>
          <input
            max="1"
            min="0"
            step="0.01"
            type="range"
            value={volume}
            onChange={handleChange}
            onMouseUp={() => {
              setTimeout(() => {
                setDisplay("");
              }, 1000);
            }}
          ></input>
        </div>
      </div>
    </div>
  );
}

export default App;
