const addBook = document.getElementById('add-new-book');
const allBooks = document.getElementById('all-books');
const contact = document.getElementById('contact');

const showList = () => {
  allBooks.classList.remove('hide');
  addBook.classList.add('hide');
  contact.classList.add('hide');
};

const addBooks = () => {
  allBooks.classList.add('hide');
  addBook.classList.remove('hide');
  contact.classList.add('hide');
};

const contactPages = () => {
  contact.classList.remove('hide');
  allBooks.classList.add('hide');
  addBook.classList.add('hide');
};

export { showList, addBooks, contactPages };