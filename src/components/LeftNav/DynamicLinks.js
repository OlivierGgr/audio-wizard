import React from 'react'
import Nav from 'react-bootstrap/Nav'
import dynamicLinks from '../../data/dynamicLinks'

export default function DynamicLinksFactory() {
    return dynamicLinks.map(link => <Nav.Link href={link.route}>{link.text}</Nav.Link>
    )
}