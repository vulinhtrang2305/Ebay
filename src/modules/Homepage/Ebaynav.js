import React from 'react';
import { Navbar, Nav, Form, FormControl, Button, InputGroup, Dropdown, DropdownButton } from 'react-bootstrap';
import { FaBell, FaShoppingCart } from 'react-icons/fa';

function EbayNav() {
  return (
    <div className='container-fluid'>
         <Navbar bg="light" className="border-bottom" expand="lg">
        <Nav className="ml-auto">
          <Nav.Link href="/login">Hi! <strong>Sign in</strong> or</Nav.Link>
          <Nav.Link href="/register"><strong>Register</strong></Nav.Link>
          <Nav.Link href="#">Daily Deals</Nav.Link>
          <Nav.Link href="#">Help & Contact</Nav.Link>
        </Nav>
      </Navbar>

      {/* Bottom Navbar with logo, search bar, and more */}
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/EBay_logo.svg/800px-EBay_logo.svg.png"
            width="80"
            alt="eBay Logo"
          />
          <span className="ml-2" style={{fontSize: "11px"}}>Shop by category</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Search Bar */}
          <Form inline className="mx-auto w-75">
            <InputGroup className="w-100">
              <FormControl type="text" style={{borderRadius: "20px", height: "50px"}} placeholder="Search for anything" className="mr-sm-2" />
              <DropdownButton as={InputGroup.Append} variant="outline-secondary" title="All Categories">
                <Dropdown.Item href="#">Electronics</Dropdown.Item>
                <Dropdown.Item href="#">Fashion</Dropdown.Item>
                <Dropdown.Item href="#">Home & Garden</Dropdown.Item>
              </DropdownButton>
              <Button variant="primary" style={{borderRadius: "15px", width: "20%"}}>Search</Button>
            </InputGroup>
            {/* <Nav.Link href="#" className="ml-2">Advanced</Nav.Link> */}
          </Form>

          <Nav className="ml-auto">
            <Nav.Link href="#">Ship to</Nav.Link>
            <Nav.Link href="#">Sell</Nav.Link>
            <Nav.Link href="#">Watchlist</Nav.Link>
            <Dropdown>
              <Dropdown.Toggle variant="link" id="dropdown-basic">
                My eBay
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#">Summary</Dropdown.Item>
                <Dropdown.Item href="#">Recently Viewed</Dropdown.Item>
                <Dropdown.Item href="#">Bids/Offers</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Nav.Link href="#">
              <FaBell />
            </Nav.Link>
            <Nav.Link href="#">
              <FaShoppingCart />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  
  )
}

export default EbayNav;