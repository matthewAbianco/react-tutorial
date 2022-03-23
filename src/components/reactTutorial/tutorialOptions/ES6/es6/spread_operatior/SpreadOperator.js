import React from 'react'
import './SpreadOperator.css'
import spreadCode from './assets/spreadCode.png'
import spreadOutcome from './assets/spreadOutcome.png'


const SpreadOperator = () => {
    return (
        <div className='spread__contaner'>
            <div className='spread__content'>
                <div className='spread__section'>
                    <h1>Spread Operator</h1>
                    <p>The spread operator is used to combine different objects and arrays into a single objects or arrays. </p>
                    <p> *Disclaimer* Spread children are not supported in React. Meaning you cannot destructure a '...insertConstNameHere' into a h2 or other tag. but the outcome can be seen in console.</p>
                </div>
                <div className='spread__section spread__images'>
                    <div className='spread__image'>
                        <h2>Spread Code</h2>
                        <img src={spreadCode} alt='spread code' />
                    </div>
                    <div className='spread__image'>
                        <h2>Spread Code</h2>
                        <img src={spreadOutcome} alt='spread Outcome' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SpreadOperator