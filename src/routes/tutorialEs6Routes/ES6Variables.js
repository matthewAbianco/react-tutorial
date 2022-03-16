import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import ReactTutorial from '../../components/reactTutorial/ReactTutorial'
import Variables from '../../components/reactTutorial/tutorialOptions/ES6/es6/variables/Variables'
import '../tutorialRoutes/routes.css'

const ES6Variables = () => {
    return (
        <div className='container'>
            <Navbar />
            <div className='body'>
                <div className='body__sidebar'>
                    <ReactTutorial />
                </div>
                <div className='body__home'>
                    <Variables />
                </div>
            </div>
        </div>
    )
}

export default ES6Variables