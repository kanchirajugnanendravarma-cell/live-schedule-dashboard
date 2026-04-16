import ProgramItem from "./ProgramItem";
import { getProgramStatus } from "../utils/timeUtils";

export default function ChannelCard({ channel, currentTime }) {
  let current = null;
  let next = null;

  channel.schedules.forEach((prog) => {
    const { status } = getProgramStatus(prog, currentTime);

    if (status === "Live") current = prog;
    if (status === "Starts in" && !next) next = prog;
  });

  return (
    <div
      style={{
        background: "#fff",
        padding: "15px",
        marginBottom: "15px",
        borderRadius: "10px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
      }}
    >
      <h2 style={{ marginBottom: "10px", color: "#2f3542" }}>
        {channel.name}
      </h2>

      {current && <ProgramItem program={current} currentTime={currentTime} />}
      {next && <ProgramItem program={next} currentTime={currentTime} />}
    </div>
  );
}