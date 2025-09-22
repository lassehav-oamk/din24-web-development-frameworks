import React from 'react'
import Ex81Book from './Ex81Book';

export default function Ex82AddBooksToList() {

    // const bookNameArray : string[] = [
    //     "The Hobbit",
    //     "1984",
    //     "Brave New World",
    //     "Fahrenheit 451",
    //     "The Catcher in the Rye"
    // ]

    const [books, setBooks] = React.useState<string[]>([
        "The Hobbit",
        "1984",
        "Brave New World",
        "Fahrenheit 451",
        "The Catcher in the Rye"
    ])
    const [newBook, setNewBook] = React.useState<string>("");

    function addBookToList() {
        // create a clone of the books array
        const booksClone = [...books];
        // add the new book to the clone
        booksClone.push(newBook);
        setBooks(booksClone);
    }

    return (
        <>
            <h1>Ex82AddBooksToList</h1>
            <div>
                <input type="text" value={ newBook } onChange={ event => setNewBook(event.target.value) }/> 
                <button onClick={ addBookToList }>Add book</button>
            </div>
            <div>
                {                    
                    books.map(book => {
                        const upperCaseBook = book.toUpperCase();
                        return <Ex81Book bookName={upperCaseBook} />
                    })
                }                
            </div>
        </>
    )
}
