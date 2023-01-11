import React from 'react';
import { NavLink, useNavigate} from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate()
    return ( 
        <header id="navbar">
            <NavLink to='/' span id="logo"><span>Git</span> Tracker</NavLink>
            <button onClick={() => navigate(-1)}>Back</button>
        </header>
     );
}
 
export default Navbar;