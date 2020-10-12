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

for( let x of warriorsGames){
  const{homeTeam, awayTeam} = x;
  // deconstracting the team and away team and we give the nicknames to their properties, 
  /**so now instead of hometeam.team it wil be hTeam */
  const { team:hTeam, points:hPoints} = homeTeam;
  const { team:aTeam, points:aPoints} = awayTeam;
  const gameLi = document.createElement('li')

  const teamNames =`${aTeam} @ ${hTeam}`;

  let  scoreLine = (aPoints > hPoints)?`<b>${aPoints}</b>  - ${hPoints}`:`${aPoints} - <b>${hPoints}</b>`
  // check the name of the tema to be even to GoldenState and provide you with object back
  const warriors = hTeam ==="GoldenState" ? homeTeam:awayTeam
  gameLi.classList.add(warriors.isWinner?"win":"loss")

  gameLi.innerHTML=`${teamNames} ${scoreLine}`
  ulParent.appendChild(gameLi)
}

document.body.prepend(ulParent);