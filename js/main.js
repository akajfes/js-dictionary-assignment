import 'bootstrap/dist/css/bootstrap.min.css';
import {getWord} from './api/dictionary.js';

function getWordData(callback){
    getWord(callback)
    .then((res) => res.json())
    .then((definition) => {
    callback(definition);
});
}

console.log(getDefinition('hello'));
