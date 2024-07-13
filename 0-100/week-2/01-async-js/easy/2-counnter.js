// Without using setInterval, try to code a counter in Javascript.

let count = 0;

function updateCounter() {
  count++;
  console.log(count);
  setTimeout(updateCounter, 1000);
}

updateCounter();
