import React from 'react'
import Ex81Book from './Ex81Book';

export default function Ex81FavouriteBookList() {

    const bookNameArray : string[] = [
        "The Hobbit",
        "1984",
        "Brave New World",
        "Fahrenheit 451",
        "The Catcher in the Rye"
    ]

    return (
        <>
            <h1>Ex81FavouriteBookList</h1>
            <div>
                {
                    // bookNameArray.map(book => <li>{book}</li>)
                    bookNameArray.map(book => {
                        console.log('Hello from map function');
                        const upperCaseBook = book.toUpperCase();
                        return <Ex81Book bookName={upperCaseBook} />
                    })
                }
                {/* <ul>
                    <li>
                        The Hobbit
                    </li>
                    <li>
                        1984
                    </li>
                    <li>
                        Brave New World
                    </li>
                    <li>
                        Fahrenheit 451
                    </li>
                    <li>
                        The Catcher in the Rye
                    </li>
                </ul> */}
            </div>
        </>
    )
}
