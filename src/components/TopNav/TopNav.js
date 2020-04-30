import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import './TopNav.css'

export default function TopNav() {
    return(
        <div className="topNavMain">
            <Navbar className="topNavBar">
                <Navbar.Brand href="#home">
                <img
                    src="/logo.svg"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                />
                </Navbar.Brand>
            </Navbar>
        </div>
    )
}