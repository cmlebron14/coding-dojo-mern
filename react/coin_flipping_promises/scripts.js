const tossCoin = () => {
  return Math.random() > 0.5 ? "heads" : "tails";
}

const fiveHeads = new Promise((resolve, reject) => {
  let headsCount = 0;
  let attempts = 0;

  while (headsCount < 5 && attempts <= 100) {
    attempts++;
    let result = tossCoin();
    console.log(`${result}`)
    if (result === "heads") {
      headsCount++;
    } else {
      headsCount = 0;
    }
  }

  if (headsCount == 5) {
    resolve(`It took ${attempts} tries to flip heads five times in a row!`);
  } else {
    reject(Error("Error: coin has been flipped 100 times... that's too many times"));
  }
});

fiveHeads
  .then( res => console.log(res) )
  .catch( err => console.error(err) );