import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import ReactTutorial from '../../components/reactTutorial/ReactTutorial'
import Destructuring from '../../components/reactTutorial/tutorialOptions/ES6/es6/destructuring/Destructuring'
import '../tutorialRoutes/routes.css'

const ES6Destructuring = () => {
    return (
        <div className='container'>
            <Navbar />
            <div className='body'>
                <div className='body__sidebar'>
                    <ReactTutorial />
                </div>
                <div className='body__home'>
                    <Destructuring />
                </div>
            </div>
        </div>
    )
}

export default ES6Destructuring