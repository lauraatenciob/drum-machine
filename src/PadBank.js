import { buttons } from "./consts";

export default function PadBank() {
    function playAudio(id) {
        const audio = document.getElementById(id);
        audio.play();
        audio.parentElement.focus();
        let currentAudio = buttons.find((element) => id === element.idAudio);
        setDisplay(currentAudio.audioName);
      }


    return (
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
    )
}