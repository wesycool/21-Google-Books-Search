import React, {useState} from "react";
import { useLocation } from "react-router-dom";
import axios from 'axios'

function Books({book, updated}) {
    const {pathname} = useLocation()
    const {_id,bookId,title,subtitle,authors,imageLinks,infoLink, description} = book
    const [numOfAuthors] = useState(!authors? 0 : authors.length)
    
    const saveBook = () => {
        axios.get(`./api/books/${bookId}`)
        .then( ({data}) => {return (data === '')})
        .then( condition => {
            const data = {title,subtitle,authors,imageLinks,infoLink,description,bookId}
            const headers = {'Content-Type': 'application/json'}

            condition ? axios.post('./api/books', {headers, data}) 
                      : console.log('Book already saved')})
    }

    const deleteBook = () => {
        axios.delete(`/api/books/${_id}`)
        updated()
    }

    return (
        <div className='card' style={{marginBottom:'10px'}}>
            <div className="card-body">
                <div className='row' style={{marginBottom:'10px'}}>
                    <div className='col'>
                        <h5>{title}</h5>
                        <p>{subtitle}</p>
                        <p>Written by: {(numOfAuthors === 0) ? 'Unknown' : authors.join(', ')}</p>
                    </div>
                    <div className='col-12 col-md-3'>
                        <div className="btn-group justify-content-end" role="group" aria-label="Basic example" style={{width:"100%"}}>
                            <button type="button" className="btn btn-outline-secondary">View</button>
                            <button type="button" className="btn btn-outline-secondary" onClick={(pathname === '/') ? saveBook : deleteBook }>{(pathname === '/') ? 'Save' : 'Delete'}</button>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col" style={{marginBottom:'10px'}}>
                        <img src={imageLinks.thumbnail}  alt={infoLink} width="100%"/>
                    </div>
                    <div className="col-12 col-md-9">
                        <p className="card-text">{description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Books;