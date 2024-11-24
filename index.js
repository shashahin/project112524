let books = [
  {
    title: "book1",
    Athor: " shahin",
    date: "2021",
  },
  {
    title: "book1",
    Athor: " shahin",
    date: "2021",
  },
  {
    title: "book1",
    Athor: " shahin",
    date: "2021",
  },
  {
    title: "book1",
    Athor: " shahin",
    date: "2021",
  },
  {
    title: "book1",
    Athor: " shahin",
    date: "2021",
  },
  {
    title: "book1",
    Athor: " shahin",
    date: "2021",
  },
  {
    title: "book1",
    Athor: " shahin",
    date: "2021",
  },
  {
    title: "book1",
    Athor: " shahin",
    date: "2021",
  },
  {
    title: "book1",
    Athor: " shahin",
    date: "2021",
  },
  {
    title: "book1",
    Athor: " shahin",
    date: "2021",
  },
  {
    title: "book1",
    Athor: " shahin",
    date: "2021",
  },
  {
    title: "book1",
    Athor: " shahin",
    date: "2021",
  },
  {
    title: "book1",
    Athor: " shahin",
    date: "2021",
  },
  {
    title: "book1",
    Athor: " shahin",
    date: "2021",
  },
  {
    title: "book1",
    Athor: " shahin",
    date: "2021",
  },
  {
    title: "book1",
    Athor: " shahin",
    date: "2021",
  },
  {
    title: "book1",
    Athor: " shahin",
    date: "2021",
  },
];
function card(book, classname) {
  return `<div class="card ${classname}" data-index="${classname}">
        <h4 class="title">${book.title}</h4>
        <span class="date">${book.date}</span>
      </div>
      `;
}
function loadCards() {
  let cards = books.map((book, index) => card(book, index + 1)).join("");
  document.querySelector("#card_container").innerHTML = cards;
  document.querySelector(".heading").setAttribute("data-count", books.length);
}
window.addEventListener("load", () => loadCards());
