const warriorsGames = [{
  awayTeam: {
    team: 'Golden State',
    points: 119,
    isWinner: true
  },
  homeTeam: {
    team: 'Houston',
    points: 106,
    isWinner: false
  }
},
{
  awayTeam: {
    team: 'Golden State',
    points: 105,
    isWinner: false
  },
  homeTeam: {
    team: 'Houston',
    points: 127,
    isWinner: true
  }
},
{
  homeTeam: {
    team: 'Golden State',
    points: 126,
    isWinner: true
  },
  awayTeam: {
    team: 'Houston',
    points: 85,
    isWinner: false
  }
},
{
  homeTeam: {
    team: 'Golden State',
    points: 92,
    isWinner: false
  },
  awayTeam: {
    team: 'Houston',
    points: 95,
    isWinner: true
  }
},
{
  awayTeam: {
    team: 'Golden State',
    points: 94,
    isWinner: false
  },
  homeTeam: {
    team: 'Houston',
    points: 98,
    isWinner: true
  }
},
{
  homeTeam: {
    team: 'Golden State',
    points: 115,
    isWinner: true
  },
  awayTeam: {
    team: 'Houston',
    points: 86,
    isWinner: false
  }
},
{
  awayTeam: {
    team: 'Golden State',
    points: 101,
    isWinner: true
  },
  homeTeam: {
    team: 'Houston',
    points: 92,
    isWinner: false
  }
}
]

const ulParent = document.createElement('ul')

const makeChart = (games) => {
  for( let x of games){
    const gameLi = document.createElement('li')
    // check the name of the tema to be even to GoldenState and provide you with object back
   
    gameLi.classList.add(isWinner(x,targetTeam)?"win":"loss")
    gameLi.innerHTML= getScoreLine(x);
    ulParent.appendChild(gameLi)
  }
  return ulParent;
}

// check to see if the team is the winner team
const isWinner = ({homeTeam, awayTeam}, targetTeam) => {
  const target = homeTeam.team ===targetTeam ? homeTeam:awayTeam;
  return target.isWinner
}

const getScoreLine =({homeTeam, awayTeam})=>{ // destructiring within the parameters
  const { team:hTeam, points:hPoints} = homeTeam;
  const { team:aTeam, points:aPoints} = awayTeam;
  const teamNames =`${aTeam} @ ${hTeam}`;
  let  scoreLine = (aPoints > hPoints)?`<b>${aPoints}</b>  - ${hPoints}`:`${aPoints} - <b>${hPoints}</b>`
  return `${teamNames} ${scoreLine}`
}

// passing the outcome of the function to the const so it can be reused
const chart1 = makeChart(warriorsGames, "Houston")
document.body.prepend(chart1);