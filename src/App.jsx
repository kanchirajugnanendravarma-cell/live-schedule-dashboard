import { useState, useEffect } from "react";
import ChannelList from "./components/ChannelList";
import data from "./data/sampleData";

function App() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ padding: "20px", maxWidth: "900px", margin: "auto" }}>
      <h1>Live Schedule Dashboard</h1>
      <ChannelList data={data} currentTime={currentTime} />
    </div>
  );
}

export default App;