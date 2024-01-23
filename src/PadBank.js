import { buttons } from "./consts";

export default function PadBank({ onPlay }) {
  return (
    <div id="button-container">
      {buttons.map((element) => (
        <button
          key={element.idButton}
          id={element.idButton}
          className="drum-pad"
          onClick={() => onPlay(element)}
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
  );
}
