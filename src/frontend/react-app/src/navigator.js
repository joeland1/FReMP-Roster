import React from "react";
import { Outlet, Link } from "react-router-dom";

class Navigator extends React.Component{
    render(){ 
        return(
        <>
            <nav>
                <Link to="/">Home</Link> | 
                <Link to="/search">Search</Link> |
                <Link to="/student">Student</Link>
            </nav>
            <Outlet />
        </>
        );
    }
}

export { Navigator };
