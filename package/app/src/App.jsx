import React, { Suspense } from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import { Nav, Navbar, NavItem } from 'reactstrap';
import './app.css';

const App = () => {
  const HomePage = React.lazy(() => import('HomeApp/HomePage'));
  const ContactPage = React.lazy(() => import('ContactApp/ContactPage'));

  return (
    <Router>
      <section>
        <Navbar color="light" light expand="md">
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link to="/">Home</Link>
            </NavItem>
            <NavItem>
              <Link to="/contact">Contato</Link>
            </NavItem>
          </Nav>
        </Navbar>

        <Routes>
          <Route
            exact
            path="/"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <HomePage />
              </Suspense>
            }
          ></Route>
          <Route
            exact
            path="/contact"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <ContactPage />
              </Suspense>
            }
          ></Route>
        </Routes>
      </section>
    </Router>
  );
};

export default App;
