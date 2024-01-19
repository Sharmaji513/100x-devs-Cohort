// code a counter in Javascript It should go up as time goes by in intervals of 1 second

let count = 0;

function startCounter() {
    setInterval(() => {
      count++;
      console.log(count);
    }, 1000);
  }
  
  startCounter();