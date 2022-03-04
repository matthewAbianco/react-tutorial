import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import ReactTutorial from '../../components/reactTutorial/ReactTutorial'
import Memo from '../../components/reactTutorial/tutorialOptions/memo/Memo'

import './routes.css'

const TutorialMemo = () => {
    return (
        <div className='container'>
            <Navbar />
            <div className='body'>
                <div className='body__sidebar'>
                    <ReactTutorial />
                </div>
                <div className='body__home'>
                    <Memo />
                </div>
            </div>
        </div>
    )
}

export default TutorialMemo