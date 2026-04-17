import ChannelCard from "./ChannelCard";

export default function ChannelList({ data, currentTime,filter}) {
  return (
    <div>
      {data.map((channel) => (
        <ChannelCard key={channel.id} channel={channel} currentTime={currentTime} filter={filter}/>
      ))}
    </div>
  );
}