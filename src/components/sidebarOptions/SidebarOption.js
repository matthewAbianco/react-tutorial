import React from 'react'
import './SidebarOption.css'

const SidebarOption = (props) => {
    return (
        <div className='sidebarOption'>
            <p>{props.title}  </p>
        </div>
    )
}

export default SidebarOption