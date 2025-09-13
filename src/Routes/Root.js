import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function Root() {
    return (
        <div>
            <nav style={{display: "flex", gap: "20px"}}>
                <Link to = "/">Home</Link>
                <Link to = "/about">About</Link>
                <Link to = "/contact">Contact</Link>
                <Link to = "/nopage">NoPage</Link>
            </nav>
            <Outlet />
        </div>
    );
}