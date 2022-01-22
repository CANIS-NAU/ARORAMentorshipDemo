function FindMRButterfly( mood, stress ) {
  var moodDict = {'Happy' : 1,
                  'Neutral' : 2,
                  'Sad' : 3}
  var stressDict = {'Low' : 1,
                    'Medium' : 2,
                    'High' : 3}
  var butterflyArr = [ 'green', 'yellow', 'red' ];

  var risk = ( moodDict[ mood ] + stressDict[ stress ] ) / 2;

  return butterflyArr[ risk ];
}

function FindAVGHelper( mood1, str1, mood2, str2, mood3, str3 ) {
  var flyDict = {'green' : 1,
                 'yellow' : 2,
                 'red' : 3}
  var butterflyArr = [ 'green', 'yellow', 'red' ];

  var flyOne = FindMRButterfly(mood1, str1);
  var flyTwo = FindMRButterfly(mood2, str2);
  var flyThree = FindMRButterfly(mood3, str2);

  var risk = ( flyDict[flyOne] + flyDict[flyTwo] + flyDict[flyThree] ) / 3;

  return butterflyArr[ risk ];
}

function FindAVGButterfly( mentee ) {
   mood1 = mentee.moodreports[0].mood;
   mood2 = mentee.moodreports[1].mood;
   mood3 = mentee.moodreports[2].mood;
   str1 = mentee.moodreports[0].stresslevel;
   str2 = mentee.moodreports[1].stresslevel;
   str3 = mentee.moodreports[2].stresslevel;

   return FindAVGHelper( mood1, str1, mood2, str2, mood3, str3 );
}
