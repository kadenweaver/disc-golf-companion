import { useState } from "react";
import { ResultsTable } from "./ResultsTable";
import { DataStore } from "aws-amplify";
import { UserGameScore } from "./models";

export function ResultsPage(props) {
  const { playerList, refreshGame, frontNine } = props;
  const [scoresSubmitted, setScoresSubmitted] = useState(false);

  const saveUserScores = async () => {
    const userGameScores = playerList.map(x =>
      DataStore.save(
        new UserGameScore({
          user: x.name,
          frontNine: frontNine,
          userScores: x.scores,
        })
      )
    );
    const resultArray = await Promise.allSettled(userGameScores);

    for (let result of resultArray) {
      if (result.status === "rejected") {
        console.log(result.reason);
      }
    }

    setScoresSubmitted(true);
  };

  return (
    <div>
      <h1>Results</h1>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <ResultsTable playerList={playerList} />
        <button
          style={{
            backgroundColor: scoresSubmitted ? undefined : "green",
            color: scoresSubmitted ? undefined : "white",
            width: "60%",
            alignSelf: "center",
          }}
          onClick={() => (scoresSubmitted ? refreshGame() : saveUserScores())}
        >
          {scoresSubmitted ? "Play Again" : "Save Results"}
        </button>
      </div>
    </div>
  );
}
