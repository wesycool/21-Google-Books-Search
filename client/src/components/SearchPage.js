import React, {useState, useRef} from "react";
import Books from "./Books"
import axios from 'axios'

function SearchPage() {
    const [bookList, setBookList] = useState([])
    const querySearch = useRef()

    const searchBtn = async () => {
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${querySearch.current.value}&projection=lite&key=AIzaSyB5FGB7KkzjQ9qmS_kEy4o3R0yrTDYLGS8`)
        .then( ({data:{items}}) => {
            const getInfo = items.map( ({volumeInfo}) => {return volumeInfo})
            setBookList(getInfo)
        })
    }


    return(
        <div>
            <h3>Book Search</h3>
            <div className="container">
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Book Title" ref={querySearch} />
                    <button class="btn btn-outline-secondary" type="button" onClick={searchBtn}>Search</button>
                </div>
            </div>

            <h4>{bookList.length !== 0? 'Results' : ''}</h4>
            <div className="container">
                {bookList.map( (book) => <Books book={book}/> )}
            </div>
        </div>
    )
}

export default SearchPage;