const addFilmBtn = document.querySelector(".js-add-film");
const filmListNode = document.querySelector(".js-film-list");
const filmInputNode = document.querySelector(".js-input-film");

filmArray = [];

addFilmBtn.addEventListener("click", function () {
  if (filmInputNode.value != "") {
    filmArray.push(filmInputNode.value);
    renderFilmList();
  }
});

function renderFilmList() {
  filmHTML = "";
  filmArray.forEach((item) => {
    filmHTML += `<li class="film__item">
    <div class="film__info">
    <button class="film__checkbox"></button>
    ${item}
    </div>
    <button class="film__del"></button>
    </li>`;
  });
  filmListNode.innerHTML = filmHTML;
}

filmListNode.onclick = function (event) {
  let target = event.target;
  console.log(target);
};
