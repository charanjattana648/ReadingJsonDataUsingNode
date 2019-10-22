const fs = require("fs");
fs.readFile('NBA_Data.csv', display);

function display(err, data) {
    let team = [];
    let wonStatus = [];
    if (err)
        return console.error(err + " ----- ");

    const champ = data.toString();
    const champArrayLine = champ.split("\n")

    console.log("Champions with number of Final they Won :")
    for (i in champArrayLine) {
        if (i > 0) {
            const champNameArray = champArrayLine[i].split(",")
            if (!wonStatus[champNameArray[1]])
                wonStatus[champNameArray[1]] = 1
            else
                wonStatus[champNameArray[1]]++
        }
    }
    // sorting function *****************************************************
    var wonStatusSorted = [];
    for (k in wonStatus) {
        wonStatusSorted.push([k, wonStatus[k]]);
        wonStatusSorted.sort(function(a, b) {
            a = a[1];
            b = b[1];
            return b - a;
        })
    }

    for (k in wonStatusSorted) {
        console.log(wonStatusSorted[k][0] + " : " + wonStatusSorted[k][1])
    }

}
