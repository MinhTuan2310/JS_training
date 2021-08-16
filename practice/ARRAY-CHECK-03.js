export function hasEasyFrontend(wordList) {
  if(!Array.isArray(wordList)) return false;

  return wordList
    .join(" ")
    .includes("easy frontend");
    
}

// console.log(hasEasyFrontend(['easy', '']));
// console.log(hasEasyFrontend(['easy', 'frontend']));
// console.log(hasEasyFrontend(['easy frontend', '']));