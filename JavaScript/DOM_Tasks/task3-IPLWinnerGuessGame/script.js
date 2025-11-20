let button = document.querySelector("button");
let h1 = document.querySelector("h1");
let title = document.querySelector("#title");
let main = document.querySelector("main");

const teamList = [
  {
    teamName: "Chennai Super Kings",
    logo: "./assets/csklogo.png",
    primary: "yellow",
    secondary: "orange",
    trophies: 5,
  },
  {
    teamName: "Mumbai Indians",
    logo: "./assets/milogo.png",
    primary: "blue",
    secondary: "gold",
    trophies: 5,
  },
  {
    teamName: "Delhi Capitals",
    logo: "./assets/dclogo.png",
    primary: "red",
    secondary: "blue",
    trophies: 0,
  },
  {
    teamName: "Kolkata Knight Riders",
    logo: "./assets/kkrlogo.png",
    primary: "purple",
    secondary: "gold",
    trophies: 3,
  },
  {
    teamName: "Gujarat Titans",
    logo: "./assets/gtlogo.png",
    primary: "aqua",
    secondary: "darkblue",
    trophies: 1,
  },
  {
    teamName: "Punjab Kings",
    logo: "./assets/pbkslogo.png",
    primary: "red",
    secondary: "white",
    trophies: 0,
  },
  {
    teamName: "Rajasthan Royals",
    logo: "./assets/rrlogo.png",
    primary: "darkpink",
    secondary: "darkblue",
    trophies: 1,
  },
  {
    teamName: "Lucknow Super Giants",
    logo: "./assets/lsglogo.png",
    primary: "white",
    secondary: "darkblue",
    trophies: 0,
  },
  {
    teamName: "Royal Challengers Bangalore",
    logo: "./assets/rcblogo.png",
    primary: "darkred",
    secondary: "gray",
    trophies: 1,
  },
  {
    teamName: "Sunrisers Hyderabad",
    logo: "./assets/srhlogo.png",
    primary: "orange",
    secondary: "darkred",
    trophies: 1,
  },

];

button.addEventListener("click", () => {
  let randomTeam = Math.floor(Math.random() * teamList.length);
  title.innerHTML = `<img src="${teamList[randomTeam].logo}" alt="${teamList[randomTeam].teamName}" width="200" height="200" style="object-fit: contain; object-position: center" />
                     <p style="color: ${teamList[randomTeam].secondary}; font-weight: 800">${teamList[randomTeam].teamName}</p>
                     <p style="color: ${teamList[randomTeam].secondary}; font-weight: 600">Total Trophies: ${teamList[randomTeam].trophies}</p>`;

  main.style.backgroundColor = teamList[randomTeam].primary;
  h1.style.color = teamList[randomTeam].secondary;
});
