import React from "react";
import "./Jumbotron.css"

function Jumbotron() {
    return(
        <div className="d-flex flex-column bd-highlight mb-3 text-white justify-content-center" style={{height:'30vh', background: 'url(https://collegeinfogeek.com/wp-content/uploads/2018/11/Essential-Books.jpg)'}}>
            <div className="p-2 bd-highlight align-self-center">
                <hr/>
            </div>

            <div className="p-2 bd-highlight align-self-center">
                <h2>(React) Google Books Search</h2>
            </div>

            <div className="p-2 bd-highlight align-self-center">
                Search for and Save Books of Interest
            </div>

            <div className="p-2 bd-highlight align-self-center">
                <hr/>
            </div>

        </div>
    )
}

export default Jumbotron;