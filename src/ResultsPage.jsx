import { ResultsTable } from "./ResultsTable";
import { DataStore } from "aws-amplify";
import { UserGameScore } from "./models";

export function ResultsPage(props) {
  const { playerList } = props;

  const saveUserScores = async () => {
    const userGameScores = playerList.map(x =>
      DataStore.save(
        new UserGameScore({
          user: x.name,
          frontNine: true,
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
  };

  return (
    <div>
      <h1>Results</h1>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <ResultsTable playerList={playerList} />
        <button onClick={() => saveUserScores()}>Save Results</button>
      </div>
    </div>
  );
}
