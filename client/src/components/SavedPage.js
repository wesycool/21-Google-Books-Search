import React, {useState, useEffect} from "react";
import Books from "./Books"
import axios from "axios";

function SavedPage() {
    const [bookList, setBookList] = useState([])

    const updated = () => {
        axios.get('../api/books')
        .then( ({data}) => setBookList(data) )
    }

    useEffect(() => updated(), [] )

    return(
        <div>
            <h3>Saved Books</h3>

            <div className="container">
                {bookList.map( book => <Books key={book._id} book={book} updated={updated}/> )}
            </div>
        </div>
    )
}

export default SavedPage;