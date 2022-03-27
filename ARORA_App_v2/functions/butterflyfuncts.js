export function FindMRButterfly( mood, stress ) {
  // Mood and stress values, with a lower number representing lower risk
  var moodDict = {'Happy' : 1,
                  'Neutral' : 2,
                  'Sad' : 3}
  var stressDict = {'Low' : 1,
                    'Medium' : 2,
                    'High' : 3}
  var butterflyArr = [ 'green', 'yellow', 'red' ];

  // Determine risk by finding the average of mood and stress
  var risk = ( moodDict[ mood ] + stressDict[ stress ] ) / 2;

  // return the associated butterfly
  return butterflyArr[ Math.floor(risk-1) ];
}

export function FindAVGHelper( mood1, str1, mood2, str2, mood3, str3 ) {
  var flyDict = {'green' : 1,
                 'yellow' : 2,
                 'red' : 3}
  var butterflyArr = [ 'green', 'yellow', 'red' ];

  var flyOne = FindMRButterfly(mood1, str1);
  var flyTwo = FindMRButterfly(mood2, str2);
  var flyThree = FindMRButterfly(mood3, str2);

  // find the average of the three butterflies inputted
  var risk = ( flyDict[flyOne] + flyDict[flyTwo] + flyDict[flyThree] ) / 3;

  return butterflyArr[ Math.floor(risk-1) ];
}

// determine a mentee's overall risk by checking the 3 latest reports
export function FindAVGButterfly( mentee ) {
   var mood1 = mentee.moodreports[0].mood;
   var mood2 = mentee.moodreports[1].mood;
   var mood3 = mentee.moodreports[2].mood;
   var str1 = mentee.moodreports[0].stresslevel;
   var str2 = mentee.moodreports[1].stresslevel;
   var str3 = mentee.moodreports[2].stresslevel;

   return FindAVGHelper( mood1, str1, mood2, str2, mood3, str3 );
}
