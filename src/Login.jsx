import React from 'react';
import { useNavigate } from 'react-router-dom';
import credentials from './data.js';
import { isValid } from './data.js';
import { useForm } from 'react-hook-form';
import './style.css';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onChange' });

  const navigate = useNavigate();

  const onSubmit = (data) => {
    //console.log("Submitted the form", data);
    if (
      data.uname === credentials.username &&
      data.passwd === credentials.password
    ) {
        localStorage.setItem("userName",data.uname);
      navigate('/layout');

    } else if (data.uname !== credentials.username) {
      alert('Invalid username');
    } else if (data.passwd !== credentials.password) {
      alert('Invalid password');
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center vh-100">
      <div
        className="container mt-3 border border-2 p-4 rounded-3 shadow"
        style={{ maxWidth: '350px' }}
      >
        <h2 className="text-center mb-4">Login</h2>
        <form  onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4 mt-3">
            <label className="pb-2">Username:</label>
            <input
              type="text"
              className="form-control border-2"
              {...register('uname', {
                required: 'This input is required',
                pattern: {
                  value: /^[a-zA-Z]{5,}$/,
                  message: 'Should contain only alphabets',
                },
              })}
            />
            {errors.uname && (
              <span className="error-msg">{errors.uname.message}</span>
            )}
          </div>
          <div className="mb-4">
            <label className="pb-2">Password:</label>
            <input
              type="password"
              className="form-control border-2"
              {...register('passwd', {
                required: 'This input is required',
                validate: isValid,
              })}
            />
            {errors.passwd && (
              <span className="error-msg">{errors.passwd.message}</span>
            )}
          </div>

          <button type="submit" className="btn btn-primary w-100 mt-4">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
export default Login;
