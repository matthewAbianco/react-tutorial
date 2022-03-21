import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import ReactTutorial from '../../components/reactTutorial/ReactTutorial'
import Notes from '../../components/notes/Notes'

import '../tutorialRoutes/routes.css'

const NotesRoutes = () => {
    return (
        <div className='container'>
            <Navbar />
            <div className='body'>
                <div className='body__sidebar'>
                    <ReactTutorial />
                </div>
                <div className='body__home'>
                    <Notes />
                </div>
            </div>
        </div>
    )
}

export default NotesRoutes