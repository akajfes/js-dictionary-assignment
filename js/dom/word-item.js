/*
HTML Structure 

<li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto definition">
        <div class="fw-bold">WORD HERE</div>
        <p>PARAGRAPH HERE</p>
    </div>
    <button class="m-2 btn btn-primary favourite-word">Add To Favourites</button>
</li>


Note: I'm sure you've read the PDF but there will be no marks given
for using innerHTML or innerText. 
*/

function createWordItem(wordData) {
  let recents = document.querySelector(".recently-search-words");

  //setting up li
  let li = document.createElement("li");
  li.classList.add(
    "list-group-item",
    "d-flex",
    "justify-content-between",
    "align-items-start"
  );
  //first div
  let outerDiv = document.createElement("div");
  outerDiv.classList.add("ms-2", "me-auto", "definition");
  //second div
  let innerDiv = document.createElement("div");
  innerDiv.classList.add("fw-bold");
  let word = wordData.word;
  innerDiv.textContent = word;
  //Get first “definition” in the first “meaning” from the wordData object.
  let p = document.createElement("p");
  let definition = wordData.meanings[0].definitions[0].definition;
  p.textContent = definition;

  //button
  let favButton = document.createElement("button");
  favButton.classList.add("btn", "btn-primary", "favourite-word");
  favButton.textContent = "Add To Favourites";

  li.append(outerDiv);
  outerDiv.append(innerDiv);
  outerDiv.append(p);
  li.append(favButton);

  recents.append(li);
  return li;
}

export { createWordItem };
