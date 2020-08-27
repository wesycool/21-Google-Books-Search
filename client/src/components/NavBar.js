import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavBar() {
    const {pathname} = useLocation()

    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <span className="navbar-brand">Google Books</span>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <div className="navbar-nav">
                        <Link to="/" className={pathname === '/'? "nav-link active" : "nav-link"}>Saved</Link>
                        <Link to="/search" className={pathname === '/search'? "nav-link active" : "nav-link"}>Searched</Link>
                    </div>
                </div>

            </div>
        </nav>
    )
}

export default NavBar;