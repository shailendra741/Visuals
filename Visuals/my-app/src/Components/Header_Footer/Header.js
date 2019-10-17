import React, { Component } from 'react';


class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

                <a className="navbar-brand" href="#">My Visuals</a>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav"
                    aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="basicExampleNav">
                    <ul className="navbar-nav mr-auto">
                

                    {/* <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">Select Categories Of Visuals</a>
                        <div className="dropdown-menu dropdown-primary" aria-labelledby="navbarDropdownMenuLink">
                        <a className="dropdown-item" href="#">Bar Chart</a>
                        <a className="dropdown-item" href="#">Pie Chart</a>
                        <a className="dropdown-item" href="#">Donut Chart</a>
                        <a className="dropdown-item" href="#">Area Chart</a>
                    
                        </div>
                    </li> */}
                    </ul>
                    {/* <form className="form-inline my-2 my-lg-0 ml-auto">
                        <input className="form-control" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-white btn-md my-2 my-sm-0 ml-3" type="submit">Search</button>
                    </form> */}
                </div>

                </nav>
                <div className="text-center">
                    
                </div>
            </div>
        );
    }
}

export default Header;