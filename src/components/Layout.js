import React from 'react'
import { Outlet } from "react-router-dom";
import Sidebar from './Sidebar';

export default function Layout() {
    return (
        <>
            <Sidebar />
            <div id="main">
                <Outlet />
                <footer>
                    <div className="footer clearfix mb-0 text-muted">
                        <div className="float-start">
                            <p>2022 &copy;Socia</p>
                        </div>
                        <div className="float-end">
                            <p>
                                Crafted with{" "}
                                <span className="text-danger">
                                    <i className="bi bi-heart" />
                                </span>{" "}
                                by JS 
                            </p>
                        </div>
                    </div>
                </footer>
            </div>
        </>

    )
}
