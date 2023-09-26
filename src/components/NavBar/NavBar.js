import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
return (
    <nav className="NavBar">
        <Link to='/'>
            <h3>TECommerce</h3>
        </Link>

        <div className='Categories'>
            <NavLink to={`/category/category1`} activeClassName='ActiveOption'>Celulares</NavLink>
            <NavLink to={`/category/category2`} activeClassName='ActiveOption'>Tablets</NavLink>
            <NavLink to={`/category/notebook`} activeClassName='ActiveOption'>Notebooks</NavLink>
        </div>
    </nav>
);
}

export default NavBar;
