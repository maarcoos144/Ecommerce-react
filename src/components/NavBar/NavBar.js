import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
return (
    <nav className="NavBar">
        <Link to='/'>
            <h3>TECommerce</h3>
        </Link>

        <div className='Categories'>
            <NavLink to={`/category/category1`} >Celulares</NavLink>
            <NavLink to={`/category/category2`} >Tablets</NavLink>
            <NavLink to={`/category/notebook`} >Notebooks</NavLink>
        </div>
    </nav>
);
}

export default NavBar;
