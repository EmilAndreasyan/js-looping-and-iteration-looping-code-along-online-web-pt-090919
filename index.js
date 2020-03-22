// Code your solutions in this file

function writeCards( names, gift ) {
  let cards = []
  for ( let i = 0; i < namesArray.length; i++ ) {
    thankYouCards.push( `Thank you, ${names[i]}, for the wonderful ${gift} gift!` )
  }
  return thankYouCards
}

function countDown(start) {
while (start > 0) {
  console.log(start)
  start -= 1;
}
console.log(start)
}