import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import ReactTutorial from '../../components/reactTutorial/ReactTutorial'
import SassStyling from '../../components/reactTutorial/tutorialOptions/sassStyling/SassStyling'

import './routes.css'

const TutorialSassStyling = () => {
    return (
        <div className='container'>
            <Navbar />
            <div className='body'>
                <div className='body__sidebar'>
                    <ReactTutorial />
                </div>
                <div className='body__home'>
                    <SassStyling />
                </div>
            </div>
        </div>
    )
}

export default TutorialSassStyling