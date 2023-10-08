import React from 'react'
import { Link } from 'react-router-dom'

export default function ForgotPassword() {
  return (
    <div className='text-center col-md-6 col-lg-3 col-sm-8 m-auto mt-5'>
    <div className="form-signin m-auto">
      <form>
        <h5 className="h5 fw-semibold">Socia</h5>
        <p className="h6 mb-4 fw-normal">Trouble Logging In?</p>
        <p className="mb-4 fw-normal">Enter your email, phone, or username and we'll send you a link to get back into your account.</p>
        <input type="text" className="form-control mb-2" placeholder="Mobile Number, Email or Username" aria-label="Email" aria-describedby="basic-addon1" />
        <button className="w-100 mt-3 btn btn-dark" type="submit">
        Send Login Link
        </button>

        <p className="mt-3 fw-normal"><Link to="/login" className='link-dark'>Back to Login</Link> </p>

        <p className="mt-5 mb-3 text-muted">socia&copy;2022</p>
      </form>
    </div>
  </div>
  )
}
