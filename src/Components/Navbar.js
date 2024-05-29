import React from 'react'
import Dropdown from './dropdown'
import "../App.css"

const Navbar = () => {
    return (
        <div>
            <div className="title">
                <div className="top">
                    <a class="navbar-brand" href="#">
                        Logo
                    </a>
                    <div>Random Password Generator</div>
                </div>
                <Dropdown />
                <div class="topnav">
                    <div class="container-fluid">
                    </div>
                    <div className="navbar">
                        <a href="#password-generator">Password Generator</a>
                        <a href="#memorable-password-generator">Memorable</a>
                        <a href="#passphase-generator">Passphase Generator</a>
                        <a href="#sha-1-generator">SHA-1</a>
                        <a href="#sha-256-generator">SHA-256</a>
                        <a href="#sha-512-generator">SHA-512</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar