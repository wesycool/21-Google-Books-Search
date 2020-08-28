import React from "react";
import { useLocation } from "react-router-dom";
import axios from 'axios'

function Books({book}) {
    const {_id,title,subtitle,authors,imageLinks,infoLink, description, canonicalVolumeLink} = book
    const {pathname} = useLocation()

    const saveBook = () => {
        const bookId = canonicalVolumeLink.split('id=')[1]
        axios.get(`./api/books/${bookId}`)
        .then( ({data}) => {return (data === '')})
        .then( condition => {
            const data = {title,subtitle,authors,imageLinks,infoLink,description,bookId}
            condition ? axios.post('./api/books', {headers: {'Content-Type': 'application/json'},data}) 
                      : console.log('Book already saved')})
    }

    const deleteBook = () => {
        axios.delete(`/api/books/${_id}`)
    }

    return (
        <div className='card' style={{marginBottom:'10px'}}>
            <div className="card-body">
                <div className='row' style={{marginBottom:'10px'}}>
                    <div className='col'>
                        <h5>{title}</h5>
                        <p>{subtitle}</p>
                        <p>Written by: {authors.join(', ')}</p>
                    </div>
                    <div className='col-12 col-md-3'>
                        <div className="btn-group justify-content-end" role="group" aria-label="Basic example" style={{width:"100%"}}>
                            <button type="button" className="btn btn-outline-secondary">View</button>
                            <button type="button" className="btn btn-outline-secondary" onClick={pathname === '/' ? saveBook : deleteBook}>{pathname === '/' ? 'Save' : 'Delete'}</button>
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