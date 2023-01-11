import React from 'react';
import { NavLink, useNavigate} from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate()
    return ( 
        <header id="navbar">
            <NavLink to='/' id="logo"><span>Git</span> Tracker</NavLink>
        </header>
     );
}
 
export default Navbar;