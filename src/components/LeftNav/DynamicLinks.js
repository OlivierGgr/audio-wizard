import React from 'react'
import Nav from 'react-bootstrap/Nav'

const links = [{
    text: "1ère visite",
    route: "/home"
    },
    {
    text: "Adaptation",
    route: "/home"
    },
    {
    text: "Essais",
    route: "/home"
    },
    {
    text: "Appareillés",
    route: "/home"
    }
]

export default function DynamicLinks() {
    return links.map(link => <Nav.Link href={link.route}>{link.text}</Nav.Link>
    )
}