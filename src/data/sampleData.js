const now = new Date();

const addMinutes = (mins) => new Date(now.getTime() + mins * 60000).toISOString();

const data = [
  {
    id: "ch1",
    name: "Channel 1",
    schedules: [
      { start: addMinutes(-30), end: addMinutes(30), title: "News" }, 
      { start: addMinutes(30), end: addMinutes(90), title: "Movie" }  
    ]
  },
  {
    id: "ch2",
    name: "Channel 2",
    schedules: [
       { start: addMinutes(-60), end: addMinutes(-10), title: "Sports" }, 
      { start: addMinutes(10), end: addMinutes(70), title: "Music" }     
    ]
  }
];

export default data;