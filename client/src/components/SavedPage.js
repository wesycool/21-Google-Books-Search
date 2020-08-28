import React, {useState, useEffect} from "react";
import Books from "./Books"

function SavedPage() {
    const [bookList, setBookList] = useState([])

    useEffect(() => {
        const books = [
            {title:'title1', authors:['authors1'],description: 'description1',image:'image1',link:'link1'},
            {title:'title2', authors:['authors2'],description: 'description2',image:'image2',link:'link2'}
        ]
        setBookList(books)
    }, [] )

    return(
        <div>
            <h3>Saved Books</h3>

            <div className="container">
                {bookList.map( (book) => <Books key={book._id} book={book}/> )}
            </div>
        </div>
    )
}

export default SavedPage;