var http = require('http');
var fs = require('fs');
var path = require('path');
var songMinutes=1;
var songSeconds = 15;

var total=0;
var milisecond=0;
var minute=0;
var second=0;

setInterval(()=>{
    milisecond+=100;
    total+=100;
    if (milisecond===1000){
        milisecond=0;
        second+=1;
    }
    if (second===60){
        minute+=1;
        second=0;
    }
    if (minute===songMinutes && second===songSeconds){
        minute=0;
        second=0;
        total=0;
        milisecond=0;
    }
    //console.log(minute);
   // console.log(second);
   // console.log("-------");

}
, 100);

http.createServer(function (request, response) {
    console.log('request ', request.url);

    request.url;
    if (request.url === "/africa"){
    response.writeHead(200, { 'Content-Type': "application/json" });
    response.end(total + "\n" + minute+"\n"+second, 'utf-8');
    }
        

}).listen(8125);
console.log('Server running at http://127.0.0.1:8125/');