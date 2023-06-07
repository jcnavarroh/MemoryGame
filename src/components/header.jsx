import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain } from '@fortawesome/free-solid-svg-icons';
import ChangeUser from './changeUser';
import ResetGame from "./resetGame";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

const Header = (props) => {

    return(
        <header className="header">
            {['lg'].map((expand) => (
                <Navbar key={expand} bg="dark" expand={expand} className="mb-3">
                <Container fluid>
                    <FontAwesomeIcon icon={faBrain} />
                    <Navbar.Brand href="#">Memory Game</Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                    <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-${expand}`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                    placement="end"
                    >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                        Memory Game
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <div className="sub-title">
                            <span>test your concentration</span>
                        </div>
                        <div className="header-score">
                            {props.playerNames[0] && <span>{props.playerNames[0]}'s points: {props.hits[0]}</span>}
                            {props.playerNames[1] && <span>{props.playerNames[1]}'s points: {props.hits[1]}</span>}
                        </div>
                        <Nav className="justify-content-end flex-grow-1 pe-3 header-buttons">
                            <ChangeUser/>
                            <ResetGame/>
                        </Nav>
                    </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
                </Navbar>
            ))}
        </header>
    )
}

export default Header;