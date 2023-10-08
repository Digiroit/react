import React, { useEffect, useState, useContext } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom'
import { loginEndpoint } from './../utils/apis';
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { StorageContext } from '../App';

export default function Login() {
  const navigate = useNavigate();

  const storageContext = useContext(StorageContext);


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
    email: '',
    password: '',
    errors: {
      email: false,
      password: false,
    }
  }

  // form state
  const [loginState, setRegistrationState] = useState(initialRegistrationState);
  const [isSubmitDisabled, setSubmitDisabled] = useState(false);

  const handleFormInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setRegistrationState(values => ({ ...values, [name]: value }))
  }

  const handleSubmit = async (event) => {
    setSubmitDisabled(true);
    event.preventDefault();
    // api url for login
    await axios.post(loginEndpoint, {
      ...loginState
    }).then(res => {
      console.log(res.data);
      const result = res.data;
      setSubmitDisabled(false);
      if (!result.success) {
        return notify('error', result.message);
      }
      storageContext.dispatch({
        type: 'LOGIN',
        payload: result.data
      })
      notify('success', result.message);
      console.log(result,'<< data');
      navigate("/");
    }).catch(err => {
      notify('error', 'Something went wrong');
      setSubmitDisabled(false);
      console.log(err.response.data)
    });
  }

  return (
    <div className='text-center col-md-6 col-lg-3 col-sm-8 col-xs-10 m-auto mt-5'>
      <div className="form-signin m-auto">
        <form onSubmit={handleSubmit}>
          <h5 className="h5 fw-semibold">Socia</h5>
          <p className="h6 mb-3 fw-normal">Login</p>
          <input type="text" className="form-control mb-2" placeholder="Email or Username" name="email" onChange={handleFormInput} value={loginState.email} aria-label="Email" aria-describedby="basic-addon1" />
          <input type="password" className="form-control mb-2" placeholder="Password" name="password" onChange={handleFormInput} value={loginState.password} aria-label="Password" aria-describedby="basic-addon1" />
          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" defaultValue="remember-me" /> Remember me
            </label>
          </div>
          <button className="w-100 btn btn-dark" type="submit">
            Login
          </button>
          <p className='mt-3'>

          <Link to="/forgot-password" className='link-dark'>Forgot password?</Link>
          </p>

          <p className="mt-3 fw-normal">Don't have an account? <Link to="/register" className='link-dark'>Register</Link> </p>
          <p className="mt-5 mb-3 text-muted">socia&copy;2022</p>
        </form>
      </div>
    </div>

  )
}
