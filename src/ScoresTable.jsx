import { DateTime } from "luxon";

export const ScoresTable = props => {
  const { scoresList } = props;
  return (
    <table
      style={{
        border: "1px solid white",
        borderCollapse: "collapse",
      }}
    >
      <tbody>
        <tr>
          <th style={{ border: "1px solid white" }}>Name</th>
          <th style={{ border: "1px solid white" }}>Score</th>
          <th style={{ border: "1px solid white" }}>Date</th>
          {Array.from(Array(9).keys())
            .map(x => x + 1)
            .map(x => (
              <th key={`hole_td_${x}`} style={{ border: "1px solid white" }}>
                {x}
              </th>
            ))}
        </tr>
        {scoresList?.map((player, index) => (
          <tr key={`name_tr${index}`}>
            <td
              style={{
                border: "1px solid white",
              }}
            >{`${player?.user}`}</td>
            <td style={{ border: "1px solid white" }}>
              {player?.userScores?.reduce(
                (a, b) => parseInt(a) + parseInt(b),
                0
              )}
            </td>
            <td style={{ border: "1px solid white" }}>
              {DateTime.fromISO(player?.createdAt).toFormat("MM/dd/yy")}
            </td>
            {player?.userScores?.map((x, scoreidx) => (
              <td
                key={`hole_td_score${player.name}_${scoreidx}`}
                style={{
                  border: "1px solid white",
                }}
              >
                {x}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
