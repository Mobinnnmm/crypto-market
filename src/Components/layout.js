import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuth } from '../useAuth';
import Search from './search';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Layout = ({ children }) => {
  const { logout, user, isAuthenticated } = useAuth();
  const [authStatus, setAuthStatus] = useState(isAuthenticated);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setAuthStatus(isAuthenticated);
    }

    const handleStorageChange = () => {
      setAuthStatus(isAuthenticated);
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [isAuthenticated]);

  return (
    <>
      <Navbar className='navbar'>
      <Container>
          <Navbar.Brand href="/">Crypto Market App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <FontAwesomeIcon icon="home" />
            
              <Nav.Link as={Link} href="/AllCoins">All Coins</Nav.Link>
              <Nav.Link as={Link} href="/about">About</Nav.Link>
              {authStatus ? (
                <>
    
                  {/* <FontAwesomeIcon icon="favorite" />
                  <Nav.Link as={Link} href="/favourites">Favorites</Nav.Link> */}
                  <Nav.Link href="#" onClick={(e) => { e.preventDefault(); logout(); alert('you are signed out') }}>Sign out</Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link as={Link} href="/login">Login</Nav.Link>

                  <Nav.Link as={Link} href="/register">Register</Nav.Link>
                </>
              )}
            </Nav>
            <Nav className="ms-auto">
            <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
              <Search />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        <main className="main-content">
          {children}
        </main>
      </Container>
    </>
  );
};

export default Layout;