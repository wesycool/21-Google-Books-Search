import React from "react";
import { useLocation } from "react-router-dom";

function Books({book}) {
    const location = useLocation()
    console.log(book)

    return (
        <div className='card' style={{marginBottom:'10px'}}>
            <div className="card-body">
                <div className='row' style={{marginBottom:'10px'}}>
                    <div className='col'>
                        <h5>{book.title}</h5>
                        <p>{book.subtitle}</p>
                        <p>Written by: {book.authors.join(', ')}</p>
                    </div>
                    <div className='col-12 col-md-3'>
                        <div className="btn-group justify-content-end" role="group" aria-label="Basic example" style={{width:"100%"}}>
                            <button type="button" className="btn btn-outline-secondary">View</button>
                            <button type="button" className="btn btn-outline-secondary">Save</button>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col" style={{marginBottom:'10px'}}>
                        <img src={book.imageLinks.thumbnail}  alt={book.infoLink} width="100%"/>
                    </div>
                    <div className="col-12 col-md-9">
                        <p className="card-text">{book.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Books;


// allowAnonLogging: true
// authors: (2) ["J.K. Rowling", "Newt Scamander"]
// canonicalVolumeLink: "https://play.google.com/store/books/details?id=ASImDQAAQBAJ"
// contentVersion: "1.7.9.0.preview.3"
// description: "The 2017 edition of this essential companion to the Harry Potter stories included a new foreword from J.K. Rowling (writing as Newt Scamander) and 6 new beasts! A set textbook at Hogwarts School of Witchcraft and Wizardry since publication, Newt Scamander's masterpiece has entertained wizarding families through the generations. Fantastic Beasts and Where to Find Them is an indispensable introduction to the magical beasts of the wizarding world. Scamander's years of travel and research have created a tome of unparalleled importance. Some of the beasts will be familiar to readers of the Harry Potter books - the Hippogriff, the Basilisk, the Hungarian Horntail... Others will surprise even the most ardent amateur Magizoologist. Dip in to discover the curious habits of magical beasts across five continents... At least 15% of the net retail price* of this eBook will be available to Comic Relief and Lumos Foundation for their work with children and young people to help them have a better life. 20% of these monies will be used by Comic Relief and 80% will be used by Lumos Foundation. * The net retail price means the price paid by the consumer less applicable sales taxes Comic Relief is a registered charity in the UK with charity nos. 326568 (England/Wales) and SC039730 (Scotland). Lumos Foundation is a registered charity in the UK with no. 1112575. Please note: This is the 2017 edition of the Hogwarts Library ebook, featuring bespoke cover artwork from Olly Moss and a new foreword from J.K. Rowling. The official screenplay of the 2016 Warner Bros. movie - Fantastic Beasts and Where to Find Them: The Original Screenplay - is available separately."
// imageLinks: {smallThumbnail: "http://books.google.com/books/content?id=ASImDQAAQ…=frontcover&img=1&zoom=5&edge=curl&source=gbs_api", thumbnail: "http://books.google.com/books/content?id=ASImDQAAQ…=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"}
// infoLink: "https://play.google.com/store/books/details?id=ASImDQAAQBAJ&source=gbs_api"
// maturityRating: "NOT_MATURE"
// panelizationSummary: {containsEpubBubbles: false, containsImageBubbles: false}
// previewLink: "http://books.google.ca/books?id=ASImDQAAQBAJ&printsec=frontcover&dq=Harry+Potter&hl=&cd=1&source=gbs_api"
// publishedDate: "2017-03-14"
// publisher: "Pottermore Publishing"
// readingModes: {text: true, image: true}
// title: "Fantastic Beasts and Where to Find Them"