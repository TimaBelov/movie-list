const addFilmBtn = document.querySelector(".js-add-film");
const filmListNode = document.querySelector(".js-film-list");
const filmInputNode = document.querySelector(".js-input-film");

const FILM_WAS_SEEN_CLASSNAME = "film__checkbox__ON";
const BLACKOUT_ITEM = "film__item__blackout";
const FILM_LIST_ITEM_DEL = "film__item__hidden";

addFilmBtn.addEventListener("click", function () {
  if (filmInputNode.value != "") {
    renderFilmList(filmInputNode.value);
    filmInputNode.value = "";
  }
});

function renderFilmList(filmName) {
  filmHTML = "";
  filmHTML += `<li class="film__item">
  <div class="film__info">
  <button class="film__checkbox"></button>
  ${filmName}
  </div>
  <button class="film__del"></button>
  </li>`;
  filmListNode.innerHTML = filmHTML + filmListNode.innerHTML;
}

filmListNode.addEventListener("click", function (event) {
  let target = event.target;
  if (target.classList.contains("film__checkbox")) {
    filmWasSeen(target);
  } else if (target.classList.contains("film__del")) {
    filmDel(target);
  }
});

function filmWasSeen(target) {
  let li = target.closest("li");
  if (target.classList.contains(FILM_WAS_SEEN_CLASSNAME)) {
    target.classList.remove(FILM_WAS_SEEN_CLASSNAME);
    li.classList.remove(BLACKOUT_ITEM);
  } else {
    target.classList.add(FILM_WAS_SEEN_CLASSNAME);
    li.classList.add(BLACKOUT_ITEM);
  }
}

function filmDel(target) {
  let li = target.closest("li");
  li.classList.add(FILM_LIST_ITEM_DEL);
}
