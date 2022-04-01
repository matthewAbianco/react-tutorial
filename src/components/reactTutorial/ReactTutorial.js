import React from 'react'
import SidebarOption from '../sidebarOptions/SidebarOption'
import { Link } from 'react-router-dom'
import './ReactTutorial.css'
import PositionedMenu from '../dropMenu/DropMenu'

const ReactTutorial = () => {
    return (
        <div className='sidebar'>
            <div className='sidebar__options'>
                <Link to='/'><SidebarOption title="Home" /></Link>
                <Link to='/intro'><SidebarOption title='Intro' /></Link>
                <Link to='/getStarted'><SidebarOption title="Get Started" /></Link>
                <PositionedMenu />
                <Link to='/renderHtml'><SidebarOption title="Render HTML" /></Link>
                <Link to='/jsx'><SidebarOption title="JSX" /></Link>
                <Link to='/components'><SidebarOption title="Components" /></Link>
                <Link to='/class'><SidebarOption title="Class" /></Link>
                <Link to='/props'><SidebarOption title="Props" /></Link>
                <Link to='/events'><SidebarOption title="Events" /></Link>
                <Link to='/conditionals'><SidebarOption title="Conditionals" /></Link>
                <Link to='/lists'><SidebarOption title="Lists" /></Link>
                <Link to='/forms'><SidebarOption title="Forms" /></Link>
                <Link to='/router'><SidebarOption title="Router" /></Link>
                <Link to='/memo'><SidebarOption title="Memo" /></Link>
                <Link to='/cssStyling'><SidebarOption title="CSS Styling" /></Link>
                <Link to='/sassStyling'><SidebarOption title="Sass Styling" /></Link>
                <Link to='/notes'><SidebarOption title="General notes" /></Link>
            </div>
        </div>
    )
}

export default ReactTutorial
