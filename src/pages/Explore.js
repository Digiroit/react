import { toast } from 'react-toastify';
import React, { useState } from 'react'
import axios from "axios";
import { loginEndpoint, searchEndpoint } from './../utils/apis';
import PhotoGrid from '../components/explore/PhotoGrid'

export default function Explore() {
  const [searchText, setSearchText] = useState('');
  const [searchUserResults, setSearchUserResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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

  const search = async () => {
    await axios.get(searchEndpoint + `?search=${searchText}`).then(res => {
      console.log(res.data);
      const result = res.data;
      setIsLoading(false);
      if (!result.success) {
        return notify('error', result.message);
      }
      console.log(result, '<< result');
      if (result.success)
        setSearchUserResults(result.data);
      else
        setSearchUserResults([]);

    }).catch(err => {
      notify('error', 'Something went wrong');
      setIsLoading(false);
      console.log(err.response.data)
    });
  }

  const handleSearchInput = (text) => {
    setIsLoading(true)
    setSearchText(text)
    console.log('Value', text);
    search()
  }

  // search for users
  return (
    <div className='p-2'>
      <div className="form-floating mb-3">
        <input type="text" className="form-control" value={searchText} onChange={(e) => handleSearchInput(e.target.value)} id="floatingInput" placeholder="name@example.com" />
        <label htmlFor="floatingInput">Search</label>
      </div>
      <nav className="nav nav-pills nav-justified">
        <a className="nav-link" href="#">
          Top
        </a>
        <a className="nav-link" href="#">
          Latest
        </a>
        <a className="nav-link active" aria-current="page" href="#">
          People
        </a>
        <a className="nav-link" href="#">
          Photos
        </a>
      </nav>
      <div className="card mt-5">
        {isLoading &&
            <div className="spinner-grow text-primary loader" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
        }
        {!isLoading && !!searchUserResults.length && <>
          <div className="card-header">
            <h4>Results:</h4>
          </div>
          <div className="card-content pb-4">
            {searchUserResults.map((et,i)=>
            <div className="recent-message d-flex px-4 py-3" key={'user_results'+i}>
              <div className="avatar avatar-lg">
                <img src={et.profilePic || 'assets/images/faces/4.jpg'} />
              </div>
              <div className="name ms-4">
                <h5 className="mb-1">{et.name}</h5>
                <h6 className="text-muted mb-0">@{et.userName}</h6>
              </div>
            </div>
              )}
            {/* <div className="px-4">
              <button className="btn btn-block btn-xl btn-light-primary font-bold mt-3">
                Load More
              </button>
            </div> */}
          </div>
        </>

        }
      </div>
      {/* <PhotoGrid/> */}
    </div>
  )
}
