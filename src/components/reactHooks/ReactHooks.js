import React from 'react'
import SidebarOption from '../sidebarOptions/SidebarOption'
import { Link } from 'react-router-dom'


const ReactHooks = () => {

    return (
        <div className='sidebar__container'>
            <div className='sidebar__option'>
                <Link to='/whatIsAHook'><SidebarOption title="What is a Hook?" /></Link>
                <Link to='/useState'><SidebarOption title="useState" /></Link>
                <Link to='/useEffect' ><SidebarOption title="useEffect" /></Link>
                <Link to='/useContent'><SidebarOption title="useContent" /></Link>
                <Link to='/useRef'><SidebarOption title="useRef" /></Link>
                <Link to='/useReducr'><SidebarOption title="useReducer" /></Link>
                <Link to='/useCallback'><SidebarOption title="useCallback" /></Link>
                <Link to='/useMemo'><SidebarOption title="useMemo" /></Link>
                <Link to='/customHooks'><SidebarOption title="Custom Hooks" /></Link>

            </div>
        </div>
    )
}

export default ReactHooks