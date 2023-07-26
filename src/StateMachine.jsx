import { useState } from "react";
import { SetupPage } from "./SetupPage";
import { SingleScoreForm } from "./SingleScoreForm";
import { ResultsPage } from "./ResultsPage";
import "./App.css";

const defaultScoreArr = Array(9).fill(2);

export function StateMachine() {
  const [playerList, setPlayerList] = useState([
    { name: undefined, scores: defaultScoreArr },
  ]);
  const [holeIndex, setHoleIndex] = useState(undefined);
  const [greeting, setGreeting] = useState(""); // Add this

  const advanceToNextHole = () => setHoleIndex(idx => idx + 1);

  const filterPlayersForStart = () => {
    let playerListCopy = playerList.slice();
    playerListCopy = playerListCopy.filter(
      x => ![undefined, ""].includes(x.name)
    );
    if (!playerListCopy?.length) {
      playerListCopy = [{ name: "Guest" }];
    }
    playerListCopy.map(x => (x.scores = defaultScoreArr));
    setPlayerList(playerListCopy);
  };

  const startGame = () => {
    filterPlayersForStart();
    setHoleIndex(0);
  };

  return (
    <div>
      {isNaN(holeIndex) && (
        <SetupPage
          playerList={playerList}
          setPlayerList={setPlayerList}
          startGame={startGame}
          greeting={greeting}
        />
      )}
      {holeIndex >= 0 && holeIndex < 9 && (
        <SingleScoreForm
          holeIndex={holeIndex}
          playerList={playerList}
          setPlayerList={setPlayerList}
          advanceToNextHole={advanceToNextHole}
        />
      )}
      {holeIndex > 8 && <ResultsPage playerList={playerList} />}
    </div>
  );
}
