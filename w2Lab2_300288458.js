const fs=require("fs");
var data = fs.readFileSync('NBA_Data.csv');
 let team=[];
  let wonStatus=display(data);
 
function display (data) {
     let wonStatus=[];
   
    
    const champ=data.toString();
    const champArrayLine = champ.split("\n")
    for(i in champArrayLine)
    {
        if (i > 0) {
            const champNameArray=champArrayLine[i].split(",")
            if (!wonStatus[champNameArray[1]])
                wonStatus[champNameArray[1]]=1
            else
                 wonStatus[champNameArray[1]]++
        }
    }
    return wonStatus;
}
  // returns the teams according to input.  
    function teams(winMatches)
    {
        for (k in wonStatus) {
        if(wonStatus[k]>=winMatches)
        {
              team.push(k);
        }
    }
      return team
    }
  //=============================================================================  
    // yarts start here
    
const yargs = require('yargs')

// Customize yargs version
yargs.version('1.1.0')

    yargs.command({
    command: 'won',
    describe: 'Find a team with matches won equal or greater than userEntered',
    builder: {
        wonMatches: {
            describe: 'Won Matches',
            demandOption: true,
            type: 'integer'
        }
    },
    handler: function (argv) {
        let teamsWon=teams(argv.wonMatches);
        console.log('Listing out all team won more than equal to '+argv.wonMatches);
        for(i in teamsWon)
        {
            console.log(teamsWon[i])
        }
    }
    
})
yargs.parse()

