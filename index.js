let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

const words = story.split(' ');

const betterWords = words.filter(word => {
  if (unnecessaryWords.includes(word)) {
  } else {
    return word;
  };
});

const howManyTimes = (wordsToCheck, textBlock) => {
  for (let i = 0; i < wordsToCheck.length; i++) {
    let checkingWord = wordsToCheck[i];
    let count = 0;
    for (let j = 0; j < textBlock.length; j++) {
      if (wordsToCheck[i] === textBlock[j]) {
        count += 1;
        if (count === 1) {
          console.log(checkingWord + ' has appeared ' + count + ' time so far.');
        } else {
          console.log(checkingWord + ' has appeared ' + count + ' times so far.');
        };
      };
    };
  };
};

function sentenceCounter(textBlock) {
  let count = 0;
  textBlock.forEach(word => {
    if (word[word.length-1] === '.' || word[word.length-1] === '!') {
      count += 1;
    };
  });
  console.log('There are ' + count + ' sentences in your text input.');
};

console.log('There are ' + words.length + ' words in your story.');
howManyTimes(overusedWords, words);
sentenceCounter(words);
console.log(betterWords.join(' '));