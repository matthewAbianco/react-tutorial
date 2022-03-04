import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import ReactTutorial from '../../components/reactTutorial/ReactTutorial'
import Lists from '../../components/reactTutorial/tutorialOptions/lists/Lists'

import './routes.css'

const TutorialLists = () => {
    return (
        <div className='container'>
            <Navbar />
            <div className='body'>
                <div className='body__sidebar'>
                    <ReactTutorial />
                </div>
                <div className='body__home'>
                    <Lists />
                </div>
            </div>
        </div>
    )
}

export default TutorialLists