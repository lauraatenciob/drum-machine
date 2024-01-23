export default function Display({text, volumeValue, onVolumeChange, onMoveEnd}) {
    return (
        <div id="display-container">
          <div id="display">
            <p>{text}</p>
          </div>
          <input
            max="1"
            min="0"
            step="0.01"
            type="range"
            value={volumeValue}
            onChange={onVolumeChange}
            onMouseUp={() => {
              setTimeout(() => {
                onMoveEnd();
              }, 1000);
            }}
          ></input>
        </div>
    )
}