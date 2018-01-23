function theBeatlesPlay(musicians, instruments) {
  var combo = [];
  for (var i = 0; i < musicians.length; i++) {
    combo.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return combo;
}

function johnLennonFacts(facts) {
  var i = 0;
  while (i < facts.length) {
    facts[i] = `${facts[i]}!!!`;
    i++;
  }
  return facts;
}

function iLoveTheBeatles(num) {
  let myArr = [];
  var i = 0;
  do {
    myArr.push("I love the Beatles!");
    i += 1;
  } while (i < 15);
  return myArr;
}