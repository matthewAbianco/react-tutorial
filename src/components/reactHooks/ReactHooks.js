import React from 'react'
import SidebarOption from '../sidebarOptions/SidebarOption'


const ReactHooks = () => {

    return (
        <div className='sidebar__container'>
            <div className='sidebar__option'>
                <SidebarOption title="What is a Hook?" />
                <SidebarOption title="useState" />
                <SidebarOption title="useEffect" />
                <SidebarOption title="useContent" />
                <SidebarOption title="useRef" />
                <SidebarOption title="useReducer" />
                <SidebarOption title="useCallback" />
                <SidebarOption title="useMemo" />
                <SidebarOption title="Custom Hooks" />
            </div>
        </div>
    )
}

export default ReactHooks