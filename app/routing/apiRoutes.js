var friendDatabase = require('../data/friends.js');

function apiRoutes(app,path){
    app.post('/api/friends',function(req,res){
        var myData = req.body;
        var difference = 500;
        var yourMatch;
        for (friendPos in friendDatabase){
            var friendScores = friendDatabase[friendPos].scores;
            var total = 0;
            for (scorePos in friendScores){
                total += Math.abs(myData.scores[scorePos] - friendScores[scorePos]);
            }
            if (total < difference){
                difference = total;
                yourMatch = friendDatabase[friendPos];
            }
        };
        res.json(yourMatch);
    })

    app.get('/api/friends',function(req,res){
        console.log(friendDatabase);
        res.json(friendDatabase);
    })
}

module.exports = apiRoutes;