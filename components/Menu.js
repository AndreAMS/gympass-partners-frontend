import MyApp from 'next'
import { Nav, Navbar } from 'react-bootstrap'

const Menu = () => {
    return (
        <>
        <h3 className="menu-title mt-5">GENERAL</h3>
        <Nav defaultActiveKey="/home" className="flex-column custom-nav">
            <Nav.Link href="/home"><img src="/fi-rr-dashboard.svg" width="17"/> Dashbord</Nav.Link>
            <Nav.Link eventKey="link-1"><img src="/fi-rr-users.svg" width="17"/> Clients</Nav.Link>
           
        </Nav>
       
        <h3 className="menu-title mt-3">BUSINESS</h3>
        <Nav defaultActiveKey="/home" className="flex-column custom-nav">
            <Nav.Link href="/home"><img src="/fi-rr-gym.svg" width="17"/> Activities</Nav.Link>
            <Nav.Link eventKey="link-1"><img src="/fi-rr-calendar.svg" width="17"/> Schedule</Nav.Link>
            <Nav.Link eventKey="link-2"><img src="/fi-rr-stats.svg" width="17"/> Reports</Nav.Link>
            
        </Nav>
        </>
    )
}

export default Menu