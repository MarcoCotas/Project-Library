const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const read = document.getElementById("read");
const button = document.getElementById("button");
const tableBody = document.getElementById("tableBody");
const myLibrary = [];

// Classe para criar um livro
function Book(title, author, pages, read, id) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = id;
}

// Função para adicionar um livro à biblioteca
function addBookToLibrary(event) {
  event.preventDefault();

  // Validação dos campos
  if (!title.value || !author.value || !pages.value || pages.value <= 0) {
    alert("Please fill all fields correctly!");
    return;
  }

  // Cria um novo livro
  const id = crypto.randomUUID();
  const newBook = new Book(
    title.value,
    author.value,
    pages.value,
    read.checked,
    id
  );
  myLibrary.push(newBook);

  displayLibrary(); // Atualiza a tabela

  // Limpa os campos do formulário
  title.value = "";
  author.value = "";
  pages.value = "";
  read.checked = false;
}

// Função para exibir os livros na tabela
function displayLibrary() {
  tableBody.innerHTML = ""; // Limpa o conteúdo atual da tabela

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
}

// Função para remover um livro
function removeBook(id) {
  const bookIndex = myLibrary.findIndex((book) => book.id === id);
  if (bookIndex !== -1) {
    myLibrary.splice(bookIndex, 1); // Remove o livro do array
    displayLibrary(); // Atualiza a tabela
  }
}

// Evento delegado para remover livros
tableBody.addEventListener("click", (e) => {
  if (e.target.classList.contains("remove-btn")) {
    const id = e.target.dataset.id;
    removeBook(id);
  }
});

// Adiciona o evento de clique ao botão
button.addEventListener("click", addBookToLibrary);
