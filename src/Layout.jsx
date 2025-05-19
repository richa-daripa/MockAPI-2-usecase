import React from 'react';
import Details from './Details';
import AddInfo from './AddInfo';
import { Route, useNavigate, Routes, Link } from 'react-router-dom';
import { Navbar, Container, Button } from 'react-bootstrap';

export default function Layout() {
    const userName=localStorage.getItem("userName");

    const navigate = useNavigate();

    const handleLogOut=()=>{
        localStorage.removeItem("userName");
        navigate('/');
    }

  return (
    <div>
      <Navbar className="text-bg-dark fixed-top">
        <Container>
          <Navbar.Brand className="text-white">Project Team Hub</Navbar.Brand>
          <div className="d-flex justify-content-between align-items-center">
            <i class="bi bi-person-circle fs-2 text-secondary me-2"></i>Hi, {userName}
            <Button variant="primary ms-4" onClick={handleLogOut}>Logout</Button>
          </div>
        </Container>
      </Navbar>

      <div className="d-flex mt-5">
        <div
          className="text-white p-3"
          style={{ width: '150px', backgroundColor:"rgb(140,140,140"}}
        >
          <Link className="btn bg-success-subtle w-100 mb-2 mt-5" to="/layout/details">
            Dashboard
          </Link>
          <Link className="btn bg-success-subtle w-100" to="/layout/addinfo">
            Add User
          </Link>
        </div>

        <div className="flex-grow-1 p-4">
          <Routes>
            <Route path="/details" element={<Details />} />
            <Route path="/addinfo" element={<AddInfo />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
