function theBeatlesPlay(musicians, instruments) {
  var combo = [];
  for (var i = 0; i < musicians.length; i++) {
    combo.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return combo;
}