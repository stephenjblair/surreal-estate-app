import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../components/Navbar';
import '../styles/Navbar.css';

class Navbar extends Component  {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }
    render() {
        return (
            <>
            <nav className="nav-wrapper">
            <Link to="/">
                <p className="navbar-logo"><i class="fas fa-house-user"></i>  SURREAL ESTATE</p>
            </Link>
                <div className="menu-icon" onClick={this.handleClick}>
                        <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-bar active' : 'nav-bar'}>
                    <Link to="/" className="nav-links">Home</Link>
                    <li className="nav-links">For Sale</li>
                    <li className="nav-links">To Rent</li>
                    <li className="nav-links">Find Agents</li>
                    <Link to="/contact" className="nav-links">Contact</Link>
                    <li className="nav-links">Sign In</li>
                    <Link to="/sign-up" className="nav-links">Sign Up</Link>
                </ul>
            </nav>
            </>
        )
    }
}

export default Navbar;

