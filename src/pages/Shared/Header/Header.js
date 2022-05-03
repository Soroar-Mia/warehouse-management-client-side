import { signOut } from 'firebase/auth';
import React from 'react';
import './Header.css';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {

    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }

    return (
        <Navbar collapseOnSelect expand="lg" sticky='top' className='color-n' variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/"><img height={60} src="https://i.ibb.co/SwVk131/logofff-1.webp" alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className='hober' as={Link} to="/">Home</Nav.Link>
                        <Nav.Link className='hober' href="home#items">items</Nav.Link>

                        {
                            user && <>
                                <Nav.Link className='hober' as={Link} to="ManageServices">Manage Inventories</Nav.Link>
                                <Nav.Link className='hober' as={Link} to="addItem">Add Item</Nav.Link>
                                <Nav.Link className='hober' as={Link} to="myItems">My Items</Nav.Link>
                            </>
                        }
                    </Nav>
                    <Nav >
                        <Nav.Link className='hober' as={Link} to="about">About</Nav.Link>
                        <Nav.Link className='hober' as={Link} to="blogs">Blogs</Nav.Link>
                        {
                            user ?
                                <button className='btn btn-link text-white text-decoration-none ' onClick={handleSignOut}>sign out</button>
                                :
                                <Nav.Link className='hober' as={Link} to="login">
                                    Login
                                </Nav.Link>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;