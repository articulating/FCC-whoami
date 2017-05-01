var express = require('express');
var app = express();
var options = {'day' : 'numeric', 'month' : 'long', 'year' : 'numeric'};
app.get('/whoami/', function (req, res) {
    var ip = req.ip;
    if (ip.substr(0,7) == "::ffff:") {
        ip = ip.substr(7);
    }
    var os = req.get('User-Agent');
    if (os.indexOf("(") && os.indexOf(")")) {
        os = os.substr(os.indexOf("(") + 1, 
                       os.indexOf(")") - os.indexOf("(") - 1)
    }
    res.send({
        'ipaddress' : ip,
        'language' : req.get('Accept-Language').split(",")[0],
        'software' : os
    })
})

app.listen(8080, function () {
    console.log('Whoami app now active on port 8080.')
})