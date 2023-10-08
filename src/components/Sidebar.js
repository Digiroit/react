import { Link, NavLink } from "react-router-dom";
import React, { useEffect, useState, useContext, memo } from 'react'
import { StorageContext } from '../App';

const Sidebar = ()=> {
    const storageContext = useContext(StorageContext);
    // useEffect(()=>{
    //     console.log(storageContext,'<storage')
    // },[storageContext])

    return (
        <div id="sidebar" className="active">
            <div className="sidebar-wrapper active">
                <div className="sidebar-header">
                    <div className="d-flex justify-content-between">
                        <div className="logo">
                          <p className="h4">Socia</p>
                        </div>
                        <div className="toggler">
                            <a href="#" className="sidebar-hide d-xl-none d-block">
                                <i className="bi bi-x bi-middle" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="sidebar-menu">
                    <ul className="menu">
                        <NavLink className="sidebar-link"  end to="" exact="true">
                            <li>
                                <i className="bi bi-grid-fill" />
                                <span>Dashboard</span>
                            </li>
                        </NavLink>
                        <NavLink to="/explore" className="sidebar-link">
                            <li>
                                <i className="bi bi-tropical-storm" />
                                <span>
                                    Explore
                                </span>
                            </li>
                        </NavLink>
                        <NavLink to="/messages" className="sidebar-link">
                            <li>
                                <i className="bi bi-chat-right-text" />
                                <span>Messages</span>
                            </li>
                        </NavLink>
                        {/* <NavLink to="/notifications" className="sidebar-link">
                            <li >
                                <i className="bi bi-bell" />
                                <span>Notifications</span>
                            </li>
                        </NavLink> */}
                        {/* <NavLink to="/create" className="sidebar-link">
                            <li>
                                <i className="bi bi-plus-square-dotted" />
                                <span>Create</span>
                            </li>
                        </NavLink> */}
                        <br />

                        {/* <li className="sidebar-title">Account</li> */}
                        <li className="sidebar-item ">
                            <div className="dropdown m-auto">
                                <NavLink
                                    href="#"
                                    className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <img
                                        src="https://github.com/mdo.png"
                                        alt=""
                                        width={32}
                                        height={32}
                                        className="rounded-circle me-2"
                                    />
                                    <strong>{storageContext?.store?.user?.name}</strong>
                                </NavLink>
                                <ul className="dropdown-menu text-small shadow" style={{}}>
                                    <li>
                                        <NavLink className="dropdown-item" to="/settings"
                                        >
                                            Settings
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="dropdown-item" to="/profile"
                                        >
                                            Profile
                                        </NavLink>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                        <NavLink className="dropdown-item" to="/login"
                                        >
                                            Logout
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </li>


                    </ul>
                </div>
                <button className="sidebar-toggler btn x">
                    <i data-feather="x" />
                </button>
            </div>
        </div>
        // <>
        //     <div
        //         className="d-flex flex-column flex-shrink-0 p-3"
        //         style={{ width: 280 }}
        //     >
        //         <Link
        //             to="/"
        //             className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
        //         >
        //             <svg className="bi pe-none me-2" width={40} height={32}>
        //                 <use xlinkHref="#bootstrap" />
        //             </svg>
        //             <h5 className="h5 fw-semibold">Socia</h5>
        //         </Link>
        //         <br />
        //         <br />
        //         <ul className="nav nav-pills flex-column mb-auto">
        // <li className="nav-item">
        //     <NavLink to="" exact end className={({ isActive }) =>
        //         isActive ? ' nav-link link-dark fw-semibold' : ' nav-link link-dark'
        //     }
        //         aria-current="page">
        //         <i className="bi bi-triangle me-2"></i>
        //         Home
        //     </NavLink>
        // </li>
        //             <li className="nav-item">
        //                 <NavLink to="/explore"
        //                     className={({ isActive }) =>
        //                     isActive ? ' nav-link link-dark fw-semibold' : ' nav-link link-dark'
        //                 }>
        //                     <i className="bi bi-tropical-storm me-2"></i>
        //                     Explore
        //                 </NavLink>
        //             </li>
        //             <li className="nav-item">
        //                 <NavLink to="/messages"
        //                     className={({ isActive }) =>
        //                     isActive ? ' nav-link link-dark fw-semibold' : ' nav-link link-dark'
        //                 }>
        //                     <i className="bi bi-chat-right-text me-2"></i>
        //                     Messages
        //                 </NavLink>
        //             </li>
        //             <li className="nav-item">
        //                 <NavLink to="/notifications"
        //                     className={({ isActive }) =>
        //                     isActive ? ' nav-link link-dark fw-semibold' : ' nav-link link-dark'
        //                 }>
        //                     <i className="bi bi-bell me-2"></i>
        //                     Notifications
        //                 </NavLink>
        //             </li>
        //             <li className="nav-item">
        //                 <NavLink to="/create"
        //                     className={({ isActive }) =>
        //                     isActive ? ' nav-link link-dark fw-semibold' : ' nav-link link-dark'
        //                 }>
        //                     <i className="bi bi-plus-square-dotted me-2"></i>
        //                     Create
        //                 </NavLink>
        //             </li>
        //         </ul>
        //         <br />
        //         <br />

        // <div className="dropdown m-auto">
        //     <NavLink
        //         href="#"
        //         className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle"
        //         data-bs-toggle="dropdown"
        //         aria-expanded="false"
        //     >
        //         <img
        //             src="https://github.com/mdo.png"
        //             alt=""
        //             width={32}
        //             height={32}
        //             className="rounded-circle me-2"
        //         />
        //         <strong>Jayesh Sharma</strong>
        //     </NavLink>
        //     <ul className="dropdown-menu text-small shadow" style={{}}>
        //         <li>
        //             <NavLink className="dropdown-item" to="/settings"
        //             >
        //                 Settings
        //             </NavLink>
        //         </li>
        //         <li>
        //             <NavLink className="dropdown-item" to="/profile"
        //             >
        //                 Profile
        //             </NavLink>
        //         </li>
        //         <li>
        //             <hr className="dropdown-divider" />
        //         </li>
        //         <li>
        //             <NavLink className="dropdown-item" to="/login"
        //             >
        //                 Logout
        //             </NavLink>
        //         </li>
        //     </ul>
        // </div>
        //     </div>
        // </>
    )
}


export default memo(Sidebar)