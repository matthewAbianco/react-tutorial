import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import ReactTutorial from '../../components/reactTutorial/ReactTutorial'
import GetStarted from '../../components/reactTutorial/tutorialOptions/getStarted/GetStarted'

const TutorialMain = () => {
    return (
        <div>
            <Navbar />
            <div className='main'>
                <ReactTutorial />
                <GetStarted />
            </div>
        </div>
    )
}

export default TutorialMain