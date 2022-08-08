
const showBooks = document.querySelector('#book-list')
const allBooks = document.getElementById('all-books')

export default class BookCollection{
    constructor() {
        this.books = [];
    }

display(books) {
    showBooks.innerHTML = books.map((book, i) => {
        return `
        <li>
        <span>${book.name} by ${book.author}</span>
        <button id=${i} class="remove">remove</button> 
        </li>
        `
    }).join('')
}

loadData() {
    document.addEventListener('DOMContentLoaded', () => {
    this.books = JSON.parse(localStorage.getItem('books'))
    this.display(this.books)
    allBooks.classList.remove('hide')

})
}

setData(books) {
    localStorage.setItem('books', JSON.stringify(books))

}

}