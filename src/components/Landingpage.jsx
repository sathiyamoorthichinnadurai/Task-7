import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Landingpage.css'

function Landingpage() {
  return (
    <div>
        <div className='landingpage'>
        <Navbar bg="tansparent" data-bs-theme="dark">
        <Container>
          <Navbar.Brand style={{background:'orangered',padding:7,borderRadius:30}} href="#home">HAPPY TOURS</Navbar.Brand>
          <Nav  style={{fontSize:25,padding:7}} className="me-5">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">About</Nav.Link>
            <Nav.Link href="#pricing">Contact</Nav.Link>
          </Nav>
        </Container>
        </Navbar>
        <div className='textbox'>
            <h2>To Travel is to Live</h2>
            <button className='btn'>Register</button>
            <button className='btn'>Explore Now</button>
        </div>


        </div>

    </div>
  )
}

export default Landingpage