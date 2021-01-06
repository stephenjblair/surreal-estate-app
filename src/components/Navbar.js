import React, { Component } from 'react';
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
                <p className="navbar-logo"><i class="fas fa-house-user"></i>  SURREAL ESTATE</p>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-bar active' : 'nav-bar'}>
                    <li className="nav-links">Home</li>
                    <li className="nav-links">About</li>
                    <li className="nav-links">Blog</li>
                    <li className="nav-links">Products</li>
                    <li className="nav-links">Contact</li>
                    <li className="nav-links">Sign In</li>
                    <li className="nav-links">Sign Up</li>
                </ul>
            </nav>
            </>
        )
    }
}

export default Navbar;

