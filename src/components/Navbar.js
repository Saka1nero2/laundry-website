import React ,{useState} from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link , useLocation} from 'react-router-dom';

import picture from '../assets/images/picture.png';
import './Navbar.css';

const NavigationBar = () => {
    const [expanded, setExpanded] = useState(false);
    const location = useLocation();
  
    const handleNavClick = () => {
      setExpanded(false);
    };
  
    React.useEffect(() => {
      setExpanded(false); // Close the navbar when the route changes
    }, [location]);



  return (
      <Navbar bg="light" expand="lg" fixed='top' expanded={expanded}>
          <Container>
              <Navbar.Brand as={Link} to="/" onClick={handleNavClick}>
                <img
                src={picture}
                width="30"
                height="30"
                className='d-inline-block align-top'
                alt="Laundry King"
                />
                <Link to="/" className="brand-name">
                    <span className="ms-2">LaundryKing</span>
                </Link>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav"  onClick={() => setExpanded(!expanded)}/>
              <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="ms-auto">
                      <Nav.Link as={Link} to="/" onClick={handleNavClick}>Home</Nav.Link>
                      <Nav.Link href="/#about-us" onClick={handleNavClick}>About</Nav.Link>
                      <Nav.Link as={Link} to="/services" onClick={handleNavClick}>Services</Nav.Link>
                      <Nav.Link as={Link} to="/prices" onClick={handleNavClick}>Prices</Nav.Link>
                      <Nav.Link as={Link} to="/booking-page" onClick={handleNavClick}>Booking</Nav.Link>
                      <Nav.Link as={Link} to="/my-account" onClick={handleNavClick}>My Account</Nav.Link>
                      <Nav.Link as={Link} to="/rewards" onClick={handleNavClick}>Loyalty Rewards</Nav.Link>
                  </Nav>
              </Navbar.Collapse>
          </Container>
      </Navbar>
  );
};

export default NavigationBar;