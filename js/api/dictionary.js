// fetch from the dictionary api here!
function getWord(word) {
  return fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
}

export { getWord };
