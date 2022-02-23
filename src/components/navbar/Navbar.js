import React from 'react'
import './Navbar.css'
import { FaReact } from 'react-icons/fa'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='navbar__container'>
                <div className='container__content'>
                    <div className='content__title'>
                        <a href='https://www.w3schools.com/react/default.asp' >
                            <FaReact className='content__title--icon' />
                            <h2>React</h2>
                        </a>
                    </div>
                    <div className='content__tutorial'>
                        <h2>React Tutorial</h2>
                    </div>
                    <div className='content__hooks'>
                        <h2>React Hooks</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar