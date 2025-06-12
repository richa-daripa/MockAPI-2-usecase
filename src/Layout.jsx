import React, { useState } from 'react';
import { useNavigate, NavLink, Outlet } from 'react-router-dom';
import { Navbar, Container, Button, Modal, Dropdown } from 'react-bootstrap';
import './style.css'

export default function Layout({ setLoggedin, loggedin }) {
  const userName = localStorage.getItem('userName');
  const [logoutConfirm, setLogoutConfirm] = useState(false);

  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem('userName');
    setLoggedin(false);
    navigate('/');
  };
  return (
    <>
      <Navbar className="text-bg-dark fixed-top">
        <Container>
          <Navbar.Brand className="text-white">Project Team Hub</Navbar.Brand>
          {
            loggedin && (
              <Dropdown>
                <Dropdown.Toggle as="span" className='custom-toggle'>
                  <i className="bi bi-person-circle fs-2 text-secondary"></i>
                </Dropdown.Toggle>

                <Dropdown.Menu align="end">
                  <p className='px-3'>Hi, {userName}</p>
                  <Dropdown.Item onClick={() => setLogoutConfirm(true)}>Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            )
          }


        </Container>
      </Navbar>

      <div className="d-flex h-100  position-fixed">
        <div className="bg-secondary text-black p-4 w-75 mt-5">
          <NavLink
            className="btn bg-info-subtle w-100 mb-2 mt-5"
            to="/layout"
            end
            style={({ isActive }) => ({
              color: isActive ? 'blue' : 'black',
            })}
          >
            Dashboard
          </NavLink>
          <NavLink
            className="btn bg-info-subtle w-100"
            to="/layout/addinfo"
            style={({ isActive }) => ({
              color: isActive ? 'blue' : 'black',
            })}
          >
            User Form
          </NavLink>
        </div>
      </div>
      <div className="flex-grow-1 pt-5 outlet-style">
        <Outlet />
      </div>
      <Modal
        show={logoutConfirm}
        onHide={() => setLogoutConfirm(false)}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header className="border-bottom-0" >
          <Modal.Title>Do you want to logout?</Modal.Title>
        </Modal.Header>

        <Modal.Footer className="border-top-0" >
          <Button variant="secondary" onClick={handleLogOut}>
            Logout
          </Button>
          <Button variant="primary" onClick={() => setLogoutConfirm(false)}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
