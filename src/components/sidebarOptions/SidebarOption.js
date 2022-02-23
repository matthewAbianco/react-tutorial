import React from 'react'
import './SidebarOption.css'

const SidebarOption = ({ title }) => {
    return (
        <div className='sidebarOption'>
            <p>{title}</p>
        </div>
    )
}

export default SidebarOption