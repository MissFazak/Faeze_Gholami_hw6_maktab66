let a = [-1, 150, 190, 170, -1, -1, 160, 180];

function sortByHeight(a) {
  const sortedA = [...a].sort((a, b) => a - b).filter((num) => num !== -1);
  let sortedAIndex = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] === -1) continue;
    else {
      a[i] = sortedA[sortedAIndex++];
    }
  }
  return a;
}

console.log(sortByHeight(a));
