






const timeNodes = Array.from(document.querySelectorAll("[data-time]"));

const seconds = timeNodes
.map( function (node){
   return  node.dataset.time;
})
.map(function (timeStamp){
    const [min, sec] = timeStamp.split(':').map(parseFloat);
    return (min*60 + sec);
})
.reduce( function (total, seconds){
    return total + seconds;
},0)

let secondsLeft = seconds;


const hours = Math.floor(secondsLeft/3600);
secondsLeft = secondsLeft % 3600;

const minutes = Math.floor(secondsLeft/60);
secondsLeft = secondsLeft % 60;

console.log(hours, minutes, secondsLeft);

