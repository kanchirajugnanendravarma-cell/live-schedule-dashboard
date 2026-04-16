export const getProgramStatus = (program, currentTime) => {
  const now = currentTime || new Date();

  const start = new Date(program.start);
  const end = new Date(program.end);

  if (now >= start && now <= end) {
    return {
      status: "Live",
      timeLeft: Math.floor((end - now) / 60000)
    };
  }

  if (now < start) {
    return {
      status: "Starts in",
      timeLeft: Math.floor((start - now) / 60000)
    };
  }

  return {
    status: "Ended",
    timeLeft: 0
  };
};