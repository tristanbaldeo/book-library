// Array that book objects are going to be stored into
const myLibrary = []; 

const modal = document.getElementById("modal")
const modalForm = document.getElementById("modal-form")
const buttons = document.getElementById("buttons")
const closeButton = document.getElementById("close-button")
const addButton = document.getElementById("add-button")
const addBook = document.getElementById("book")
const bookCard = document.querySelectorAll('.book-card')
const bookTitle = document.querySelectorAll('.book-title')
const bookAuthor = document.querySelectorAll('.book-author')
const pageCount = document.querySelectorAll('.page-count')
const bookButtons = document.querySelectorAll('.book-buttons')
const read = document.querySelectorAll('.read')
const remove = document.querySelectorAll('.remove')
const formItem = document.querySelectorAll('.form-item')

// Book objects
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}
// Function that take user’s input and store the new book objects into an array
function addBookToLibrary() {
  // do stuff here
}

// Function for new book pop-up form to be added with a form that states author, title, number of pages, and if it was read or not
addBook.addEventListener('click', () => {
  modal.style.display = 'block';
});

closeButton.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Function that updates the web page with the display on the book (might be included in function above)


// Function for read/not read book status when selected


// Function for ability to remove book from list with remove button