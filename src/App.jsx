import { useState, useEffect } from "react";
import ChannelList from "./components/ChannelList";
import data from "./data/sampleData";

function App() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [filter , setFilter]= useState("all");
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ padding: "20px", maxWidth: "900px", margin: "auto" }}>
      <h1>Live Schedule Dashboard</h1>
      <div style={{display: "flex", justifyContent: "flex-end",gap: "10px",marginBottom: "10px"}}>
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("live")}>Live</button>
      </div>
      <ChannelList data={data} currentTime={currentTime} 
      filter={filter}/>
    </div>
  );
}

export default App;