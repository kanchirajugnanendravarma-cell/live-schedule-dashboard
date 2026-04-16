import ChannelCard from "./ChannelCard";

export default function ChannelList({ data, currentTime }) {
  return (
    <div>
      {data.map((channel) => (
        <ChannelCard key={channel.id} channel={channel} currentTime={currentTime} />
      ))}
    </div>
  );
}