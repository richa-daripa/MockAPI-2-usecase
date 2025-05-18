import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Container, Toast } from 'react-bootstrap';

const AddInfo = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({ mode: 'onChange' });
  const [show, setShow] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  /*const onSubmit = async (data) => {
    const apimap={
      name: data.name,
    avatar: data.profileImage,
    designation: data.designation,
    gender: data.gender,
    phoneNo: data.phno,
    }
    try{
      const response=await axios.post(API_URL,apimap);
      console.log(response.data);
    }catch(error){
      alert("Failed to add user. Try again later!")
      setShow(false);
    }
    reset();
  };*/

  return (
    <>
      <Container
        className="d-flex justify-content-center align-items-center mt-2 translate-middle position-fixed start-50 top-20"
        style={{ zIndex: '1090' }}
      >
        <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
          <Toast.Body className="bg-success text-center text-white">
            User added successfully
          </Toast.Body>
        </Toast>
      </Container>
      <div className="d-flex align-items-center bg-success-subtle justify-content-center vh-100">
        <div className=" container bg-white border p-4 rounded-3 w-50">
          <h4 className="fs-5 pb-3">Fill User Details</h4>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control border border-info"
                {...register('name', { required: true })}
              />
              {errors.name && <small className="text-danger">Required</small>}
            </div>

            <div className="mb-3">
              <label className="form-label">Profile image URL</label>
              <input
                className="form-control border border-info "
                type="text"
                {...register('profileImage', { required: true })}
              />
              {errors.profileImage && (
                <small className="text-danger">Required</small>
              )}
            </div>

            <div className="mb-3">
              <label className="form-label">Designation</label>
              <input
                type="text"
                className="form-control border border-info"
                {...register('designation', { required: true })}
              />
              {errors.designation && (
                <small className="text-danger">Required</small>
              )}
            </div>

            <div className="row mt-3">
              <div className="col">
                <label className="form-label">Gender</label>
                <select
                  className="form-select border border-info"
                  {...register('gender')}
                >
                  <option value="">Select</option>
                  <option value="Female">Female</option>
                  <option value="Male">Male</option>
                </select>
              </div>
              <div className="col">
                <label className="form-label">Phone no.</label>
                <div className="input-group border border-info rounded-3">
                  <span className="input-group-text">+91</span>
                  <input
                    type="text"
                    className="form-control "
                    {...register('phno', { required: true })}
                  />
                </div>
                {errors.phno && <small className="text-danger">Required</small>}
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-primary w-100 mt-5"
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