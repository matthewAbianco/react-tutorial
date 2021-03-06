import React from 'react'
import './Navbar.css'
import { FaReact } from 'react-icons/fa'
import { Link } from 'react-router-dom'




const Navbar = () => {

    return (
        <div className='navbar__container'>
            <div className='navbar__content'>
                <div className='navbar__title'>
                    {/* target __blank opens the link in a new tab */}
                    <a href='https://www.w3schools.com/react/default.asp' target='__blank' >
                        <FaReact className='content__title--icon' />
                        <h2>React</h2>
                    </a>
                </div>
                <div className='navbar__content content__tutorial' >
                    <Link to='/'><h2>React Tutorial</h2></Link>
                </div>
                <div className='navbar__content content__hooks'>
                    <Link to='/whatIsAHook'><h2>React Hooks</h2></Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar