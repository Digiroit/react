import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NotFound() {
  return (
    <div id="error">
      <div className="error-page container">
        <div className="col-md-8 col-12 offset-md-2 text-center">
          <img
            className="img-error text-center"
            src="assets/images/samples/error-500.png"
            alt="Not Found"
          />
          <div className="text-center">
            <h1 className="error-title">System Error</h1>
            <p className="fs-5 text-gray-600">
              The website is currently unaivailable. Try again later or contact the
              developer.
            </p>
            <NavLink to="" className="btn btn-outline mt-3">
              Go Home
            </NavLink>
          </div>
        </div>
      </div>
    </div>

  )
}
