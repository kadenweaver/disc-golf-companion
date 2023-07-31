import { useEffect, useState, useCallback } from "react";
import { ScoresTable } from "./ScoresTable";
import { DataStore } from "aws-amplify";
import { UserGameScore } from "./models";

export function Scoreboard(props) {
  const { toggleScoresPageOpen } = props;
  const [allResults, setAllResults] = useState([]);
  const [frontNine, setFrontNine] = useState(true);

  const getUserScores = useCallback(async () => {
    try {
      const scoreEntries = await DataStore.query(UserGameScore, c =>
        c.and(c => [c.frontNine.eq(frontNine)])
      );
      setAllResults(
        scoreEntries
          ?.filter(x => x.createdAt)
          ?.sort(
            (a, b) =>
              a.userScores?.reduce((z, t) => z + t, 0) -
              b.userScores?.reduce((x, y) => x + y, 0)
          )
      );
    } catch (error) {
      console.log("Error retrieving scores", error);
    }
  }, [frontNine]);

  useEffect(() => {
    getUserScores();
  }, [getUserScores]);

  return (
    <div>
      <button
        onClick={() => toggleScoresPageOpen(false)}
        style={{ position: "absolute", right: "1em", top: "1em" }}
      >
        Back to Setup
      </button>
      <h1>Scores</h1>
      <button
        onClick={() => setFrontNine(dir => !dir)}
        style={{
          background: frontNine ? undefined : "black",
          marginBottom: "10px",
        }}
      >
        {frontNine ? "Front 9" : "Back 9"}
      </button>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <ScoresTable scoresList={allResults} />
      </div>
    </div>
  );
}
