import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from './data.js';
import ProfileCard from './ProfileCard';
import {Modal, Spinner, Button } from 'react-bootstrap';
import './style.css'


const Details = () => {
  const [user, setUser] = useState([]);
  const [show, setShow] = useState(false);
  const [select, setSelect] = useState(null);
  const [error, setError] = useState(null);
  const[delConfirm,showDelConfirm]=useState(false);
  const[delUser,setDelUser]=useState(null);
  const[deleting,setDeleting]=useState(false);

  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  if (error) return `Error: ${error.message}`;
  
  const handleView = (userX) => {
    setSelect(userX);
    setShow(true);
  };

  const handleDeleteConfirm=(id)=>{
    setDelUser(id);
    showDelConfirm(true);
}
  /*const handleDelete = () => {
      setUser((prev) => prev.filter((u) => u.id !== delUser));
      showDelConfirm(false);
  };*/

  const handleDelete =async () => {
    try {
      showDelConfirm(false);
      setDeleting(true);
      await axios.delete(`${API_URL}/${delUser}`);
      const updateUser=await axios.get(API_URL);
      setUser(updateUser.data);
      setDeleting(false);
    } catch (error) {
      alert("Failed to delete user");
    }
  }

  return (
    <div className="container mt-5 w-100">
      {user.length > 0 ? (
        <table className="table table-bordered text-center table-hover border-primary table-sm">
          <thead>
            <tr>
              <th colSpan={4} className=" bg-primary-subtle fs-3">
                User Dashboard
              </th>
            </tr>
            <tr className="fs-5">
              <th>UserID</th>
              <th >Name</th>
              <th >Designation</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {user.map((i) => (
              <tr key={i.id}>
                <td>{i.id}</td>
                <td>{i.name}</td>
                <td>{i.designation}</td>
                <td>
                  <div className="d-flex align-items-center justify-content-center gap-2">
                    <Button
                      variant="primary"
                      onClick={() => {
                        handleView(i);
                      }}
                    >
                      View
                    </Button>
                    <Button
                      variant="primary"
                      onClick={() => {
                        handleDeleteConfirm(i.id);
                      }}
                    >
                      Delete
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="d-flex align-items-center gap-2 justify-content-center">
          <Spinner animation="border" variant="primary" />
        </div>
      )}
      {show && (
        <ProfileCard show={show} setShow={setShow} selectUser={select} />
      )}
      {!deleting?(
      <Modal
            show={delConfirm}
            onHide={() => showDelConfirm(false)}
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body className="m-2">
                <div className="text-center">
                    <h5>Are you sure you want to delete UserID {delUser}?</h5>
                </div>
                <div className='d-flex justify-content-center align-items-center mt-4'>
                    <Button className="me-5 w-25 bg-secondary-subtle text-black" onClick={()=>showDelConfirm(false)}>No</Button>
                    <Button  className="w-25 bg-danger" onClick={handleDelete}>Yes</Button>
                </div>
            </Modal.Body>
        </Modal>)
        :(
          <div className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-flex align-items-center justify-content-center z-4">
            <p className="text-white fs-5 font-monospace">Deleting...</p>
        </div>
        )}
    </div>
  );
};
export default Details;
