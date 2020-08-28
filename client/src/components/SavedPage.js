import React, {useState, useEffect} from "react";
import Books from "./Books"
import axios from "axios";

function SavedPage() {
    const [bookList, setBookList] = useState([])

    useEffect(() => {
        axios.get('../api/books')
        .then( ({data}) => setBookList(data) )
    }, [] )

    return(
        <div>
            <h3>Saved Books</h3>

            <div className="container">
                {bookList.map( book => <Books key={book._id} book={book}/> )}
            </div>
        </div>
    )
}

export default SavedPage;