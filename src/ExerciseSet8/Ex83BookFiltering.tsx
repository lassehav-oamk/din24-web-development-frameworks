import React from 'react'
import Ex81Book from './Ex81Book';

export default function Ex83BookFiltering() {

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
    const [searchTerm, setSearchTerm] = React.useState<string>("");

    function addBookToList() {
        // create a clone of the books array
        const booksClone = [...books];
        // add the new book to the clone
        booksClone.push(newBook);
        setBooks(booksClone);
    }

    function decideIfBookIsVisible(book: string) {
        // "The Hobbit",
        const yesOrNo = book.toLowerCase().includes(searchTerm.toLowerCase());
        return yesOrNo;
    }

    return (
        <>
            <h1>Ex83BookFiltering</h1>
            <div>
                <input type="text" value={ newBook } onChange={ event => setNewBook(event.target.value) }/> 
                <button onClick={ addBookToList }>Add book</button>
            </div>
            <div>
                <input type="text" placeholder="Search books..." 
                    value={searchTerm} 
                    onChange={ event => setSearchTerm(event.target.value) } 
                />
            </div>
            <div>
                {                    
                    //books.filter(decideIfBookIsVisible).map(book => {
                    books.filter(book => book.toLowerCase().includes(searchTerm.toLowerCase()))
                        .map(book => {
                            const upperCaseBook = book.toUpperCase();
                            return <Ex81Book bookName={upperCaseBook} />
                        })
                }                
            </div>
        </>
    )
}
