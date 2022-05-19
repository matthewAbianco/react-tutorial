import React from 'react'
import './Destructuring.css'

import destructuringCode from './assets/destructuringCode.png'
import destructuringOutcome from './assets/destructuringOutcome.png'

const Destructuring = () => {
    return (
        <div className='dest__container'>
            <div className='dest__content'>
                <div className='dest__section'>
                    <h1>Destructuring</h1>
                    <p>Destructuring is used to pull specific data from an array.</p>
                </div>
                <div className='dest__section'>
                    <h2> Destructuring Objects</h2>
                    <p>Below is how you destructure an object</p>
                </div>
                <div className='dest__section'>

                    <div className='dest__image'>
                        <h2> Destructing in functional component </h2>
                        <img src={destructuringCode} alt='destructured code' />
                    </div>
                    <div className='dest__image'>
                        <h2> Code Outcome </h2>
                        <img src={destructuringOutcome} alt='destructured code outcome' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Destructuring