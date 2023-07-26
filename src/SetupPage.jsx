export function SetupPage(props) {
  const { playerList, setPlayerList, startGame, greeting } = props;

  const addPlayer = () => {
    const playerListCopy = playerList.slice();
    playerListCopy.push({});
    setPlayerList(playerListCopy);
  };

  const changePlayerName = (value, idx) => {
    const playerListCopy = playerList.slice();
    playerListCopy[idx].name = value;
    setPlayerList(playerListCopy);
  };

  const removePlayer = index => {
    let playerListCopy = playerList.slice();
    playerListCopy = playerListCopy.filter((x, nIndex) => nIndex !== index);
    setPlayerList(playerListCopy);
  };

  return (
    <div>
      <h1>Setup</h1>
      <h1>{greeting}</h1>
      <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
        {playerList.map((player, index) => (
          <div
            style={{
              width: "100px",
              display: "flex",
              flexDirection: "row",
              gap: "5px",
            }}
            key={`horizontal_div_${index}`}
          >
            <input
              key={`input_${index}`}
              type="text"
              placeholder="Add a name..."
              value={player?.name || ""}
              style={{
                width: "130px",
                height: "30px",
                border: "1px solid white",
                borderRadius: "3px",
                fontSize: "1em",
                paddingInlineStart: "5%",
              }}
              onChange={e => changePlayerName(e.target.value, index)}
            />
            {index > 0 && (
              <button
                style={{
                  height: "35px",
                  width: "35px",
                  alignItems: "center",
                  padding: "0px 12px",
                }}
                key={`button_${index}`}
                onClick={() => removePlayer(index)}
              >
                x
              </button>
            )}
          </div>
        ))}
        <button onClick={() => addPlayer()}>Add Player</button>
        <button onClick={() => startGame()}>Start</button>
      </div>
    </div>
  );
}
