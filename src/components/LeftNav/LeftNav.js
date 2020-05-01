import React from 'react'
import Nav from 'react-bootstrap/Nav'
import DynamicLinks from './DynamicLinks'
import './LeftNav.css'

// Ici je pars du principe que le composant qui contient les deux links en bas de page
// ne change jamais dans l'app: il s'agit toujours des mêmes liens, affichés dans le même ordre
const links = [{
    text: "1ère visite",
    route: "/home"
    },
    {
    text: "Statistiques",
    route: "/home"
    }
]

const staticLinks = () => {
    return links.map(link => <Nav.Link href={link.route}>{link.text}</Nav.Link>
    )
}

export default function LeftNav() {
    return(
        <div className="leftNavMain">
            <Nav defaultActiveKey="/home" className="flex-column sidebar">
                <div className="sidebarTop">
                    {DynamicLinks()}
                </div>
                <div className="sidebarBottom">
                    {staticLinks()}
                </div>
            </Nav>
        </div>
    )
}