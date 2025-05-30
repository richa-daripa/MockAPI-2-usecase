import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { API_URL } from './data.js';
import { Container, Toast } from 'react-bootstrap';
import './style.css';

const AddInfo = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid },
  } = useForm({ mode: 'onChange' });
  const [show, setShow] = useState(false);

  const [imageUrl, setImageUrl] = useState('');

  const handleImage = (event) => {
    const file = event.target.files[0];
    if (!file.type.startsWith('image/')) {
      alert('Only jpg, png and jpeg are allowed');
      event.target.value = '';
    }
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImageUrl(reader.result);
    };
  };

  const onSubmit = async (data) => {
    const apimap = {
      name: data.name,
      avatar: imageUrl,
      designation: data.designation,
    };

    try {
      const response = await axios.post(API_URL, apimap);
      console.log(response.data);
    } catch (error) {
      alert('Failed to add user. Try again later!');
      setShow(false);
    }
    reset();
  };

  return (
    <>
      <Container
        className="d-flex justify-content-center align-items-center mt-4 translate-middle position-fixed start-50 top-20"
        style={{ zIndex: '1090' }}
      >
        <Toast onClose={() => setShow(false)} show={show} delay={2000} autohide>
          <Toast.Body className="bg-success text-center text-white">
            User added successfully
          </Toast.Body>
        </Toast>
      </Container>
      <div className="bg-success-subtle vh-100 d-flex justify-content-center align-items-center " >
        <div className=" container bg-white border p-4 rounded-3 w-50 " >
          <h4 className="fs-5 text-center ">Fill User Details</h4>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                className="form-control border border-info"
                {...register('name', { required: true })}
              />
              
            </div>

            <div className="mb-3">
              <label className="form-label">Profile image</label>
              <input
                className="form-control border border-info "
                type="file"
                accept=".jpg, .png, .jpeg"
                {...register('profileImage', { required: true })}
                onChange={handleImage}
              />
              
            </div>

            <div className="mb-3">
              <label className="form-label">Designation</label>
              <input
                type="text"
                className="form-control border border-info"
                {...register('designation', { required: true })}
              />
            </div>

            <button
              type="submit"
              className="disableBtn"
              disabled={!isValid}
              onClick={() => {
                setShow(true);
              }}
            >
              Add User
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
export default AddInfo;
