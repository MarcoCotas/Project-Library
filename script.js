const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const submit = document.getElementById("button");
const read = document.getElementById("read");
const tableBody = document.querySelector(".library tbody");
const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = crypto.randomUUID();
}

function addBookToLibrary(title, author, pages, read) {
  myLibrary.push(new Book(title, author, pages, read));
  document.getElementById("book-form").reset(); // Limpa o formulário
}

function displayLibrary() {
  tableBody.innerHTML = "";

  myLibrary.forEach((book) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.pages}</td>
      <td>${book.read ? "Yes" : "No"}</td>
      <td>
        <button class="remove-btn" data-id="${book.id}">Remove</button>
      </td>
    `;

    tableBody.appendChild(row);
  });

  const removeButtons = document.querySelectorAll(".remove-btn");
  removeButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const id = e.target.dataset.id;
      removeBook(id);
    });
  });
}

function removeBook(id) {
  const bookIndex = myLibrary.findIndex((book) => book.id === id);
  if (bookIndex !== -1) {
    myLibrary.splice(bookIndex, 1);
    displayLibrary();
  }
}

submit.addEventListener("click", function (e) {
  e.preventDefault();
  addBookToLibrary(title.value, author.value, pages.value, read.checked);
  displayLibrary();
});
