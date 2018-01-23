function theBeatlesPlay(musicians, instruments) {
  var combo = [];
  for (var i = 0; i < musicians.length; i++) {
    combo.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return combo;
}

function johnLennonFacts(facts) {
  var i = 0;
  while (i < johnLennonFacts.length - 1) {
    facts[i] = `${facts[i]}!!!`
  }
}