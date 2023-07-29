import "./App.css";

export function SingleScoreForm(props) {
  const { playerList, setPlayerList, holeIndex, advanceToNextHole } = props;
  const holeNumber = holeIndex + 1;

  const setPlayerScore = (value, idx, add) => {
    const playerListCopy = playerList.slice();
    let singlePlayerScoreCopy = playerListCopy[idx].scores.slice();
    singlePlayerScoreCopy[holeIndex] = Math.max(
      singlePlayerScoreCopy[holeIndex] + (add ? 1 : -1),
      1
    );
    playerListCopy[idx].scores = singlePlayerScoreCopy;
    setPlayerList(playerListCopy);
  };

  const truncateName = strValue => {
    let rtrnVal = strValue;
    if (strValue.length > 9) {
      rtrnVal = strValue.substring(0, 9);
    }
    return rtrnVal;
  };

  return (
    <div style={{ width: "360px" }}>
      <h1>{`Hole ${holeNumber}`}</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          marginBottom: "35px",
          width: "330px",
        }}
      >
        {playerList.map((player, index) => (
          <div
            style={{
              width: "80%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              margin: "0 auto",
            }}
            key={`horizontal_div_${index}`}
          >
            <label
              style={{ position: "relative", top: "50%", marginTop: "1em" }}
            >
              {truncateName(player.name)}
            </label>
            <div
              style={{
                width: "fit-content",
                display: "flex",
                flexDirection: "row",
                verticalAlign: "center",
              }}
              key={`horizontal_div_${index}`}
            >
              <button
                onClick={e => setPlayerScore(e.target.value, index, false)}
              >
                -
              </button>
              <input
                key={`input_${index}`}
                readOnly
                min={1}
                value={player.scores[holeIndex]}
                style={{
                  width: "50px",
                  height: "45px",
                  fontSize: "20px",
                  textAlign: "center",
                }}
              />
              <button
                onClick={e => setPlayerScore(e.target.value, index, true)}
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>
      <button onClick={() => advanceToNextHole()}>Next</button>
    </div>
  );
}
