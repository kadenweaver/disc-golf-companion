import { ResultsTable } from "./ResultsTable";

export function ResultsPage(props) {
  const { playerList } = props;

  return (
    <div>
      <h1>Results</h1>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <ResultsTable playerList={playerList} />
      </div>
    </div>
  );
}
