import 'bootstrap/dist/css/bootstrap.min.css';
import {getWord} from './api/dictionary.js';
import {createWordItem} from './dom/word-item.js'

let dictionarySearch = document.querySelector('#dictionary-search');

dictionarySearch.addEventListener('submit', (event)=> {
    event.preventDefault();

    let dictionarySearchForm = event.target.elements['word'];

    getWord(dictionarySearchForm.value)
    .then((res) => res.json())
    .then((word) => createWordItem(word[0]));

})

//In the main.js file, create an event listener on the “searched words” list that will listen to clicks,
//check if it’s the button on the word item (the best way to do this is check if the element contains
//a certain class). If it is, then it will add that element to the “Favourite Words” list and
//also remove the button itself.

let searchedWords = document.querySelector('.recently-search-words');

searchedWords.addEventListener('click', (event)=> {
    let target = event.target;
    let parent = target.parentNode;

    if (target.classList.contains('favourite-word')) {
        let favourites = document.querySelector('.favourite-words');

        favourites.append(parent);
    }

})
