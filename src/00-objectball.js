function gameObject() {
  return {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1,
        },
        "Reggie Evans": {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7,
        },
        "Brook Lopez": {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15,
        },
        "Mason Plumlee": {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5,
        },
        "Jason Terry": {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1,
        },
      },
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien": {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2,
        },
        "Bismak Biyombo": {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10,
        },
        "DeSagna Diop": {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5,
        },
        "Ben Gordon": {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0,
        },
        "Brendan Haywood": {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12,
        },
      },
    },
  };
}

let overallObj = gameObject();
// console.log(overallObj.away.players["Jeff Adrien"].shoe); //drill-down to last object value

// home team
function homeTeam() {
  return overallObj.home;
}
// console.log(homeTeam());

//away team
function awayTeam() {
  return overallObj.away;
}
// console.log(awayTeam());

function allPlayers() {
  return Object.assign({}, overallObj.home.players, overallObj.away.players);
}
// console.log(allPlayers());

//consolidate home and away teams

function consolidateTeams() {
  // return Object.assign(overallObj.home, overallObj.away);

  //overallObj values
  return Object.values(overallObj);
}
// console.log(consolidateTeams());

//1. numPointsScored
//=====================
function numPointsScored(playerName) {
  let playersObj = allPlayers();
  return playersObj[playerName].points;
}
// console.log(numPointsScored("Bismak Biyombo"));

//2. shoeSize
//=============
function shoeSize(playerName) {
  let playersObj = allPlayers();
  return playersObj[playerName].shoe;
}
// console.log(shoeSize("Bismak Biyombo"));

//3. teamColors
//=================

function teamColors(teamName) {
  let teams = consolidateTeams();
  // if (teamColorsObj[teamName] == teamName) {
  //   return teamColorsObj.colors;
  // }
  const teamData = teams.find((team) => teamName === team.teamName);
  return teamData.colors;
}
// console.log(teamColors("Brooklyn Nets"));
// console.log(teamColors("Charlotte Hornets"));

//4. teamNames
//==============
function teamNames() {
  let teams = consolidateTeams();
  const names = teams.map((team) => team.teamName);
  return names;
}
// console.log(teamNames());

//5. playerNumbers
//==================
function playerNumbers(teamName) {
  let teams = consolidateTeams();
  for (const team of teams) {
    if (teamName === team.teamName) {
      const teamPlayers = Object.values(team.players);
      const jerseyNumber = teamPlayers.map((player) => player.number);
      // return `${teamName}' jersey numbers: ${jerseyNumber}`;
      return jerseyNumber;
    }
  }
}
// console.log(playerNumbers("Charlotte Hornets"));
// console.log(playerNumbers("Brooklyn Nets"));

//6. playerStats
//===============
function playerStats(playerName) {
  let playersObj = allPlayers();
  return playersObj[playerName];
}
// console.log(playerStats("Bismak Biyombo"));

//7. bigShoeRebounds
//===================
const bigShoeRebounds = () => {
  let playersObj = allPlayers();
  const playerObj = Object.values(playersObj); //get values
  function compareShoeSize(x, y) {
    //sort largest shoe size to smallest shoe size
    if (x.shoe < y.shoe) {
      return 1;
    } else if (x.shoe > y.shoe) {
      return -1;
    } else return 0;
  }
  const sortedArray = playerObj.sort(compareShoeSize);
  // return sortedArray;
  const numberOfRebounds = sortedArray[0].rebounds;
  return `Rebounds: ${numberOfRebounds}`;
};
// console.log(bigShoeRebounds());

//8. mostPointsScored
//====================
function mostPointsScored() {
  let playersObj = allPlayers();
  const playerObj = Object.entries(playersObj); //get key:values
  function comparePoints(x, y) {
    //sort largest points to smallest points
    if (x[1].points < y[1].points) {
      //check inside values object
      return 1;
    } else if (x[1].points > y[1].points) {
      return -1;
    } else return 0;
  }
  const sortedArray = playerObj.sort(comparePoints);
  const playerMostPoints = sortedArray[0][0];
  // return playerMostPoints;
  return `Highest scoring player: ${playerMostPoints}`;
}
// console.log(mostPointsScored());

//9. winningTeam

function winningTeam() {
  let overallObj = gameObject();
  // let playersObj = allPlayers();
  let homeRecords = Object.values(overallObj.home.players);
  let awayRecords = Object.values(overallObj.away.players);
  let homePoints = homeRecords.reduce((accumulation, score) => {
    return accumulation + score.points;
  }, 0);
  let awayPoints = awayRecords.reduce((accumulation, score) => {
    return accumulation + score.points;
  }, 0);

  // if (homePoints > awayPoints) {
  //   return `Winner: ${overallObj.home.teamName}`;
  // }
  if (homePoints > awayPoints) return `Winner: ${overallObj.home.teamName}`;
  else if (homePoints < awayPoints) {
    return `Winner: ${overallObj.away.teamName}`;
  } else return `It's a tie!`;
  // return homePoints;
  // return awayPoints;
}
// console.log(winningTeam());

//10. playerWithLongestName
//==========================
const playerWithLongestName = () => {
  let playersObj = allPlayers();
  let playerKeyNames = Object.keys(playersObj);
  // return playerKeyNames;
  let newPlayerKeyNames = playerKeyNames.sort((a, b) => b.length - a.length); //longest to shortest
  return newPlayerKeyNames[0];
};
// console.log(playerWithLongestName());

//11. doesLongNameStealATon
//============================
const doesLongNameStealATon = function () {
  let playersObj = allPlayers();
  const playersData = Object.values(playersObj);
  // return playersData;
  const sumOfSteals = Math.max(
    playersData.map((playerData) => playerData.steals)
  );
  const longestName = playerStats(playerWithLongestName());
  const longestNameAndStealsComboData = longestName.steals;
  // return longestNameAndStealsComboData;

  if (sumOfSteals === longestNameAndStealsComboData) {
    return true;
  } else return false;
};
// console.log(doesLongNameStealATon());
