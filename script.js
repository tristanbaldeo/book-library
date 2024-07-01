// Array that book objects are going to be stored into
const library = []; 

const modal = document.getElementById("modal")
const modalForm = document.getElementById("modal-form")
const closeButton = document.getElementById("close-button")
const addBook = document.getElementById("book")
const bookLog = document.getElementById("book-log")
const readBook = document.querySelector(".read")
const remove = document.getElementsByClassName("remove")

// Book objects
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function createBook(title, author, pages, read) {
  const newBook = Object.create(Book.prototype);
  newBook.title = title;
  newBook.author = author;
  newBook.pages = pages;
  newBook.read = read;
  return newBook;
}

// Function that take user’s input and store the new book objects into an array
function addBookToLibrary() {
  const newBook = createBook(
    document.getElementById("title").value,
    document.getElementById("author").value,
    document.getElementById("pages").value,
    document.getElementById("read").checked
  );
  library.push(newBook);
}

// Function for new book pop-up form to be added with a form that states author, title, number of pages, and if it was read or not
modalForm.addEventListener('submit', (e) => {
  e.preventDefault();
  addBookToLibrary(title, author, pages, read);
  modalForm.reset();
  renderLibrary()
});

addBook.addEventListener('click', () => {
  modal.style.display = 'block';
});

closeButton.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Function that updates the web page with the display on the book (might be included in function above)
function renderLibrary() {
  bookLog.innerHTML = '';
  library.forEach((book, index) => {
      const bookCard = document.createElement('div');
      bookCard.classList.add('book-card');
      bookCard.innerHTML = `
          <h3 class="book-title">${book.title}</h3>
          <h4 class="book-author">${book.author}</h4>
          <p class="page-count">${book.pages} pages</p>
          <div class="book-buttons">
            <button class="read">Read</button>
            <button class="remove">DEL</button>
          </div>
      `;
      bookLog.appendChild(bookCard);

      bookCard.querySelector('.remove').addEventListener('click', () => {
        library.splice(index, 1);
        renderLibrary(); 
      });
  });
}

renderLibrary()

// Function for read/not read book status when selected