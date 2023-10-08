import axios from "axios";
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { signupEndpoint } from './../utils/apis';

export default function Register() {

  const notify = (type = 'success', message = '') => toast[type](message, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

  const initialRegistrationState = {
    name: '',
    email: '',
    userName: '',
    password: '',
    errors: {
      name: false,
      email: false,
      userName: false,
      password: false,
    }
  }

  // form state
  const [registrationState, setRegistrationState] = useState(initialRegistrationState);
  const [isSubmitDisabled, setSubmitDisabled] = useState(false);
  const [isInviteSent, setInviteSent] = useState(false);

  const handleFormInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setRegistrationState(values => ({ ...values, [name]: value }))
  }

  const handleSubmit = async (event) => {
    setSubmitDisabled(true);
    event.preventDefault();
    // api url for registration
    await axios.post(signupEndpoint, {
      ...registrationState
    }).then(res => {
      console.log(res.data);
      const result = res.data;
      setSubmitDisabled(false);
      if (!result.success) {
        return notify('error', result.message);
      }
      notify('success', result.message);
      setInviteSent(true);
    }).catch(err => {
      notify('error', 'Something went wrong');
      setSubmitDisabled(false);
      console.log(err.response.data)
    });
  }

  return (
    !isInviteSent ?
      <div className='text-center col-md-6 col-lg-3 col-sm-8 m-auto mt-5'>
        <div className="form-signin m-auto">
          <form onSubmit={handleSubmit}>
            <h5 className="h5 fw-semibold">Socia</h5>
            <p className="h6 mb-3 fw-normal">Register</p>
            <input type="email" className="form-control mb-2" name="email" value={registrationState.email} onChange={handleFormInput} placeholder="Email" aria-label="Email" aria-describedby="basic-addon1" />
            <input type="text" className="form-control mb-2" name="name" value={registrationState.name} onChange={handleFormInput} placeholder="Full Name" aria-describedby="basic-addon1" />
            <input type="text" className="form-control mb-2" name="userName" value={registrationState.userName} onChange={handleFormInput} placeholder="Username" aria-describedby="basic-addon1" />
            <input type="password" className="form-control mb-2" name="password" value={registrationState.password} onChange={handleFormInput} placeholder="Password" aria-label="Password" aria-describedby="basic-addon1" />
            <div className="checkbox mb-3">
              <span className='text-sm'>By signing up, you agree to our Terms, Privacy Policy and Cookies Policy.</span>
            </div>
            {isSubmitDisabled && <span className="spinner-grow" role="status">
              <span className="visually-hidden">Loading...</span>
            </span>}
            {!isSubmitDisabled && <button className="w-100 btn btn-dark" type="submit" disabled={isSubmitDisabled}>
              {'Register'}
            </button>}
            <p className="mt-3 fw-normal">Have an account? <Link to="/login" className='link-dark'>Login</Link> </p>
            <p className="mt-5 mb-3 text-muted">socia&copy;2022</p>
          </form>
        </div>
      </div>
      : <div className='text-center col-8 m-auto mt-5'>
        <img
          className="d-block mx-auto my-4 "
          src="/assets/images/send-check.svg"
          alt=""
          width={72}
          height={57}
        />
        <h3 className="display-6 fw-bold mb-5">Congratulations!</h3>
        <div className="mx-auto">
          <p className="lead">
            Your account has been successfully created! 
          </p>
          <p className="mb-5">
            Before you may access the account, please confirm your email. Make sure to follow the instructions that were sent to your email.
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mt-2">
            <Link to="/login" type="button" className="btn btn-outline-secondary px-4">
              Go to Login
            </Link>
          </div>
        </div>
      </div>

  )
}
