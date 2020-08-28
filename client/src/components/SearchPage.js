import React, {useState, useRef} from "react";
import Books from "./Books"
import axios from 'axios'

function SearchPage() {
    const [bookList, setBookList] = useState([])
    const querySearch = useRef()

    const searchBtn = () => {
        axios.get(`./api/googlebooks/${querySearch.current.value}`)
        .then( ({data}) => {
            console.log(data)
            const getInfo = data.map( ({volumeInfo}) => {return volumeInfo})
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