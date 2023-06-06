const addFilmBtn = document.querySelector(".js-add-film");
const filmListNode = document.querySelector(".js-film-list");
const filmInputNode = document.querySelector(".js-input-film");

const FILM_WAS_SEEN_CLASSNAME = "film__checkbox__ON";

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

filmListNode.addEventListener("click", function (event) {
  let target = event.target;
  if (target.classList.contains("film__checkbox")) {
    filmWasSeen(target);
  }
});

function filmWasSeen(target) {
  if (target.classList.contains(FILM_WAS_SEEN_CLASSNAME)) {
    target.classList.remove(FILM_WAS_SEEN_CLASSNAME);
  } else {
    target.classList.add(FILM_WAS_SEEN_CLASSNAME);
  }
}
