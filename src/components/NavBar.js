import React from 'react';
import Harry from "../imgs/Harry.png"

function NavBar(props) {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar bg-info static-top">
                <div className="container-fluid m-3">
                    <a className="navbar-brand" href="#">
                        <img src={Harry} alt="Harry" height={50}/>
                    </a>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <h3 className="text-white ms-auto">Happy Harry's Hardware</h3>
                        <ul className="navbar-nav ms-auto">
                            <li className="me-3 bg-warning">
                                <a className="nav-link" href="/home">
                                    Home
                                </a>
                            </li>
                            <li className="me-3 bg-warning">
                                <a className="nav-link" href="/cust">
                                    Customers
                                </a>
                            </li>
                            <li className="me-3 bg-warning">
                                <a className="nav-link" href="/products">
                                    Products
                                </a>
                            </li>
                            <li className="me-3 bg-warning">
                                <a className="nav-link" href="/sales">
                                    Sales
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;