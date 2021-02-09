import MyApp from 'next'
import { Nav, Navbar } from 'react-bootstrap'

const Menu = () => {
    return (
        <>
        <h3 className="menu-title">GENERAL</h3>
        <Nav defaultActiveKey="/home" className="flex-column custom-nav">
            <Nav.Link href="/home">Active</Nav.Link>
            <Nav.Link eventKey="link-1">Link</Nav.Link>
            <Nav.Link eventKey="link-2">Link</Nav.Link>
        
        </Nav>
       
        <h3 className="menu-title">BUSSINESS</h3>
        <Nav defaultActiveKey="/home" className="flex-column custom-nav">
            <Nav.Link href="/home">Active</Nav.Link>
            <Nav.Link eventKey="link-1">Link</Nav.Link>
            <Nav.Link eventKey="link-2">Link</Nav.Link>
            <Nav.Link eventKey="disabled" disabled>
                Disabled
            </Nav.Link>
        </Nav>
        </>
    )
}

export default Menu