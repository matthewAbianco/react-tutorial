import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import ReactTutorial from '../../components/reactTutorial/ReactTutorial'
import Classes from '../../components/reactTutorial/tutorialOptions/ES6/es6/classes/Classes'
import '../tutorialRoutes/routes.css'

const ES6Classes = () => {
    return (
        <div className='container'>
            <Navbar />
            <div className='body'>
                <div className='body__sidebar'>
                    <ReactTutorial />
                </div>
                <div className='body__home'>
                    <Classes />
                </div>
            </div>
        </div>
    )
}

export default ES6Classes