import { getProgramStatus } from "../utils/timeUtils";

export default function ProgramItem({ program, currentTime }) {
  const data = getProgramStatus(program, currentTime);

  let bgColor = "#f1f2f6";
  let borderColor = "#dcdde1";

  if (data.status === "Live") {
    bgColor = "#eafaf1";
    borderColor = "#0fdd65";
  } else if (data.status === "Starts in") {
    bgColor = "#fff7e6";
    borderColor = "#a1a1a1";
  } else {
    bgColor = "#f1f2f6";
    borderColor = "#ced6e0";
  }

  return (
    <div
      style={{
        padding: "12px",
        marginBottom: "10px",
        borderRadius: "8px",
        border: `2px solid ${borderColor}`,
        background: bgColor,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}
    >
      <div>
        <h4 style={{ margin: 0 }}>{program.title}</h4>
      </div>

      <div style={{ fontWeight: "bold" }}>
        {data.status === "Live" && ` Live (${data.timeLeft} min)`}
        {data.status === "Starts in" && ` Starts in ${data.timeLeft} min`}
        {data.status === "Ended" && " Ended"}
      </div>
    </div>
  );
}