import MyApp from 'next'
import { Nav, Navbar } from 'react-bootstrap'

const Menu = () => {
    return (
        <>
        <h3 className="menu-title mt-5">GENERAL</h3>
        <Nav className="flex-column custom-nav">
            <Nav.Link href="/"><img src="/fi-rr-dashboard.svg" width="17"/> Dashbord</Nav.Link>
            <Nav.Link href="/clients"><img src="/fi-rr-users.svg" width="17"/> Clients</Nav.Link>
           
        </Nav>
       
        <h3 className="menu-title mt-3">BUSINESS</h3>
        <Nav className="flex-column custom-nav">
            <Nav.Link href="/"><img src="/fi-rr-gym.svg" width="17"/> Activities</Nav.Link>
            <Nav.Link  href="/"><img src="/fi-rr-calendar.svg" width="17"/> Schedule</Nav.Link>
            <Nav.Link  href="/"><img src="/fi-rr-stats.svg" width="17"/> Reports</Nav.Link>
            
        </Nav>
        </>
    )
}

export default Menu