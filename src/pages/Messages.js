import React, { useContext, useEffect } from 'react'
import { StorageContext } from '../App';
import './Messages.css'

export default function Messages() {
  const storageContext = useContext(StorageContext);

  useEffect(()=>{
    console.log(storageContext,'<<storageContext')
  },[])

  // const divRef = useRef(null);
  // useEffect(() => {
  //   divRef.current.scrollIntoView({behavior: "smooth"});
  // });

  return (
    <>
      <div className="row">
        <div className="col-md-3">
          <p className='h5'>Recent Chats</p>
          <br />
          <ul className="list-group">
            <li className="list-group-item border-0">
              <div className="media d-flex align-items-center">
                <div className="avatar me-3">
                  <img src="assets/images/faces/1.jpg" alt="" srcSet="" />
                  <span className="avatar-status bg-success" />
                </div>
                <div className="name flex-grow-1">
                  <h6 className="mb-0">Fred</h6>
                  <span className="text-xs">Online</span>
                </div>
                <button className="btn btn-sm">
                  <i data-feather="x" />
                </button>
              </div>
            </li>
            <li className="list-group-item  border-0">  <div className="media d-flex align-items-center">
              <div className="avatar me-3">
                <img src="assets/images/faces/1.jpg" alt="" srcSet="" />
                <span className="avatar-status bg-success" />
              </div>
              <div className="name flex-grow-1">
                <h6 className="mb-0">Tony</h6>
                <span className="text-xs">Hey!</span>
              </div>
              <button className="btn btn-sm">
                <i data-feather="x" />
              </button>
            </div></li>
            <li className="list-group-item  border-0">  <div className="media d-flex align-items-center">
              <div className="avatar me-3">
                <img src="assets/images/faces/1.jpg" alt="" srcSet="" />
                <span className="avatar-status bg-success" />
              </div>
              <div className="name flex-grow-1">
                <h6 className="mb-0">Punit</h6>
                <span className="text-xs">Online</span>
              </div>
              <button className="btn btn-sm">
                <i data-feather="x" />
              </button>
            </div></li>
            <li className="list-group-item  border-0">  <div className="media d-flex align-items-center">
              <div className="avatar me-3">
                <img src="assets/images/faces/1.jpg" alt="" srcSet="" />
                <span className="avatar-status bg-success" />
              </div>
              <div className="name flex-grow-1">
                <h6 className="mb-0">Mukesh</h6>
                <span className="text-xs">Online</span>
              </div>
              <button className="btn btn-sm">
                <i data-feather="x" />
              </button>
            </div></li>
            <li className="list-group-item  border-0">  <div className="media d-flex align-items-center">
              <div className="avatar me-3">
                <img src="assets/images/faces/1.jpg" alt="" srcSet="" />
                <span className="avatar-status bg-success" />
              </div>
              <div className="name flex-grow-1">
                <h6 className="mb-0">Orchid</h6>
                <span className="text-xs">Online</span>
              </div>
              <button className="btn btn-sm">
                <i data-feather="x" />
              </button>
            </div></li>
          </ul>
        </div>
        <div className="col-md-9">
          <section className="section">
            <div className="card border-0 background-snow">
              <div className="card-header">
                <div className="media d-flex align-items-center">
                  <div className="avatar me-3">

                    <i className="bi bi-caret-left"></i>
                  </div>
                  <div className="avatar me-3">
                    <img src="assets/images/faces/1.jpg" alt="" srcSet="" />
                    <span className="avatar-status bg-success" />
                  </div>
                  <div className="name flex-grow-1">
                    <h6 className="mb-0">Fred</h6>
                    <span className="text-xs">Online</span>
                  </div>
                  <button className="btn btn-sm">
                    <i data-feather="x" />
                  </button>
                </div>
              </div>
              <div className="card-body chat-box pt-4 bg-grey">
                <div className="chat-content pb-5" >
                <div className="chat chat-right">
                    <div className="chat-body">
                      <div className="chat-message p-2">Hi Alfy, how can i help you? &nbsp;<em className='text-sm text-muted'>8:15 AM</em></div>
                    </div>
                  </div>
                  <div className="chat chat-right">
                    <div className="chat-body">
                      <div className="chat-message p-2">Hi Alfy, how can i help you? &nbsp;<em className='text-sm text-muted'>8:15 AM</em></div>
                    </div>
                  </div>
                  <div className="chat chat-right">
                    <div className="chat-body">
                      <div className="chat-message p-2">Hey &nbsp;<em className='text-sm text-muted'>8:15 AM</em></div>
                    </div>
                  </div>
                  <div className="chat chat-right">
                    <div className="chat-body">
                      <div className="chat-message p-2">Alfy&nbsp;<em className='text-sm text-muted'>8:15 AM</em></div>
                    </div>
                  </div>
                  <div className="chat chat-right">
                    <div className="chat-body">
                      <div className="chat-message p-2">Hi Alfy, how can i help you? &nbsp;<em className='text-sm text-muted'>8:15 AM</em></div>
                    </div>
                  </div>
                  <div className="chat chat-right">
                    <div className="chat-body">
                      <div className="chat-message p-2">Hi Alfy, how can i help you? &nbsp;<em className='text-sm text-muted'>8:15 AM</em></div>
                    </div>
                  </div>
                  <div className="chat chat-left">
                    <div className="chat-body">
                      <div className="chat-message">
                        I'm looking for the best admin dashboard template &nbsp;<em className='text-sm text-white '>8:16 AM</em>
                      </div>
                      <div className="chat-message">With bootstrap certainly &nbsp;<em className='text-sm text-white '>8:16 AM</em></div>
                    </div>
                  </div>
                  <div className="chat chat-right">
                    <div className="chat-body">
                      <div className="chat-message">
                        I recommend you to use Mazer Dashboard &nbsp;<em className='text-sm text-muted'>8:17 AM</em>
                      </div>
                    </div>
                  </div>
                  <div className="chat chat-left" >
                    <div className="chat-body">
                      <div className="chat-message">
                        That"s great! I like it so much :) &nbsp;<em className='text-sm text-white '>8:17 AM</em>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer  border-0">
                <div className="message-form d-flex flex-direction-column align-items-center  border-0">
                  <a href="http://" className="black">
                    <i data-feather="smile" />
                  </a>
                  <div className="d-flex flex-grow-1 ml-4">
                    <input
                      type="text"
                      className="form-control  border-0"
                      placeholder="Type your message.."
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
