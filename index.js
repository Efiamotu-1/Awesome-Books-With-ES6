import BookCollection from './modules/books.js';
// import {newBook} from './modules/newBook.js';
import getDate from './modules/date.js';
import { showList, addBooks, contactPages } from './modules/switchPage.js';

const form = document.querySelector('form');
const showBooks = document.querySelector('#book-list');
const contactPage = document.getElementById('contact-link');
const add = document.getElementById('add-link');
const list = document.getElementById('list-link');
// const allBooks = document.getElementById('all-books');

const newBook = new BookCollection();

getDate();
newBook.loadData();

const addBook = (e) => {
  const { id } = e.target;
  if (e.target.classList.contains('remove')) {
    // This only removes the value from the ui not from the array
    // e.target.parentElement.remove()
    // Splice removes the value from the array but mutates the array in the process
    newBook.books.splice(id, 1);
    newBook.display(newBook.books);
    newBook.setData(newBook.books);
    // console.log(books)
  }
};

const removeBook = (e) => {
  e.preventDefault();
  const book = {
    name: form.title.value,
    author: form.author.value,
  };
  newBook.books.push(book);
  newBook.display(newBook.books);
  newBook.setData(newBook.books);
  form.title.value = '';
  form.author.value = '';
};

showBooks.addEventListener('click', (e) => addBook(e));

form.addEventListener('submit', (e) => removeBook(e));

list.addEventListener('click', () => showList());

add.addEventListener('click', () => addBooks());

contactPage.addEventListener('click', () => contactPages());
