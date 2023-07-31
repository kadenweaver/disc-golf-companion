import { useState } from "react";
import { SetupPage } from "./SetupPage";
import { SingleScoreForm } from "./SingleScoreForm";
import { ResultsPage } from "./ResultsPage";
import { Scoreboard } from "./Scoreboard";
import "./App.css";

const defaultScoreArr = Array(9).fill(2);

export function StateMachine() {
  const [playerList, setPlayerList] = useState([
    { name: undefined, scores: defaultScoreArr },
  ]);
  const [frontNine, setFrontNine] = useState(true);
  const [holeIndex, setHoleIndex] = useState(undefined);
  const [scoresPageOpen, toggleScoresPageOpen] = useState(false);

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

  const refreshGame = () => {
    setPlayerList([{ name: undefined, scores: defaultScoreArr }]);
    setHoleIndex(undefined);
    setFrontNine(true);
  };

  return (
    <div>
      {isNaN(holeIndex) &&
        (scoresPageOpen ? (
          <Scoreboard toggleScoresPageOpen={toggleScoresPageOpen} />
        ) : (
          <SetupPage
            playerList={playerList}
            frontNine={frontNine}
            setPlayerList={setPlayerList}
            startGame={startGame}
            setFrontNine={setFrontNine}
            setScoresPage={toggleScoresPageOpen}
          />
        ))}
      {holeIndex >= 0 && holeIndex < 9 && (
        <SingleScoreForm
          holeIndex={holeIndex}
          playerList={playerList}
          setPlayerList={setPlayerList}
          advanceToNextHole={advanceToNextHole}
        />
      )}
      {holeIndex > 8 && (
        <ResultsPage
          playerList={playerList}
          frontNine={frontNine}
          refreshGame={refreshGame}
        />
      )}
    </div>
  );
}
