import React from 'react'
import SidebarOption from '../sidebarOptions/SidebarOption'

const ReactTutorial = (tutorial) => {
    return (
        <div>
            <SidebarOption title="Home" />
            <SidebarOption title="Intro" />
            <SidebarOption title="Get Started" />
            <SidebarOption title="Render HTML" />
            <SidebarOption title="JSX" />
            <SidebarOption title="Components" />
            <SidebarOption title="Class" />
            <SidebarOption title="Props" />
            <SidebarOption title="Conditionals" />
            <SidebarOption title="Lists" />
            <SidebarOption title="Forms" />
            <SidebarOption title="Router" />
            <SidebarOption title="Memo" />
            <SidebarOption title="CSS Styling" />
            <SidebarOption title="Sass Styling" />
        </div>
    )
}

export default ReactTutorial