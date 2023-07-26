export const ResultsTable = props => {
  const { playerList } = props;
  return (
    <table
      style={{
        border: "1 px solid white",
        borderCollapse: "collapse",
      }}
    >
      <tbody>
        <tr>
          <td style={{ border: "1 px solid white", width: "60px" }}>Hole</td>
          {Array.from(Array(9).keys())
            .map(x => x + 1)
            .map(x => (
              <th
                key={`hole_td_${x}`}
                style={{ border: "1px solid white", width: "35px" }}
              >
                {x}
              </th>
            ))}
          <td style={{ border: "1px solid white", width: "45px" }}>Total</td>
        </tr>
        {playerList.map((player, index) => (
          <tr key={`name_tr${index}`}>
            <th
              style={{
                width: "60px",
                border: "1px solid white",
              }}
            >{`${player.name}`}</th>
            {player.scores.map((x, scoreidx) => (
              <td
                key={`hole_td_score${player.name}_${scoreidx}`}
                style={{
                  border: "1px solid white",
                  width: "35px",
                }}
              >
                {x}
              </td>
            ))}
            <td style={{ border: "1px solid white", width: "45px" }}>
              {player.scores.reduce((a, b) => parseInt(a) + parseInt(b), 0)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
