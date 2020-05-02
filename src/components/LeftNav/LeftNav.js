import React, { useState } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import DynamicLinksFactory from './DynamicLinks'
import staticLinks from '../../data/staticLinks'
import './LeftNav.css'

const staticLinksFactory = () => {
    return staticLinks.map(link => <Nav.Link href={link.route}>{link.text}</Nav.Link>
    )
}

export default function LeftNav() {
    const [toggle, setToggle] = useState(false)
    return(
        <Navbar bg="light" expand="lg" className={`flex-column sidebar ${toggle ? "toggled" : false}`}>
            <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setToggle(!toggle)}/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <div className="sidebarTop">
                        {DynamicLinksFactory()}
                    </div>
                    <div className="sidebarBottom">
                        {staticLinksFactory()}
                    </div>
                </Nav>
                
            </Navbar.Collapse>
        </Navbar>
    )
}