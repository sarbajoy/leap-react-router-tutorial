import React from 'react';
import { NavLink} from "react-router-dom";

const Navigation = () => {
    return (
        <div>
            <NavLink to="/"> Home </NavLink>


            <NavLink to="/send"> Send Money </NavLink>


            <NavLink to="/receive"> Receive Money </NavLink>

            <NavLink to="/add"> Add Recipient </NavLink>

            <NavLink to="/remove"> Remove Recipient </NavLink>
        </div>
    );
}

export default Navigation;