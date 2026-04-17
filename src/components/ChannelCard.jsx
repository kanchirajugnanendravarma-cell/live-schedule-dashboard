import ProgramItem from "./ProgramItem";
import { getProgramStatus } from "../utils/timeUtils";

export default function ChannelCard({ channel, currentTime,filter }) {
  let current = null;
  let next = null;
let programToShow = [];
  channel.schedules.forEach((prog) => {
    const { status } = getProgramStatus(prog, currentTime);
    if (filter ==="live" && status === "Live"){
      programToShow.push(prog)
    }
    if (filter === "all"){
      programToShow.push(prog);
    }
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

    {programToShow.map((prog, index) => (
              <ProgramItem key={index} program={prog}
      currentTime={currentTime}/> 
    ))}
    </div>
  );
}