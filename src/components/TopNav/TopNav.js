import React, { useContext } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import { GiHealthNormal } from 'react-icons/gi'
import { FaUserCircle } from 'react-icons/fa'
import UserContext from '../../context/UserContext'

import './TopNav.css'

export default function TopNav() {
    const activeUser = useContext(UserContext)
    return(
        <div className="topNavMain">
            <Navbar className="topNavBar">
                <Navbar.Brand href="#home">
                <GiHealthNormal style={{fill: "white", height: "2.2em", width: "2.2em"}}/>
                </Navbar.Brand>

            <div className="userNavContainer">
                <div className="userNav">
                    <FaUserCircle style={{fill: "white", height: "2.2em", width: "3.2em"}}/>
                    {activeUser.user.name !== "" ? <h2>{activeUser.user.name} {activeUser.user.surname}</h2> : <h2>Utilisateur</h2> }
                </div>
            </div>
            </Navbar>
        </div>
    )
}