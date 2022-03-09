import React from 'react'
import './GetStarted.css'
import { LoremIpsum } from 'react-lorem-ipsum'

const GetStarted = () => {
    return (
        <div className='started__container'>
            <div className='started__content'>

                <div className='started__section started__title'>
                    <h2>Starting React</h2>
                    <p> <LoremIpsum p={1} /> </p>
                </div>

                <div className='started__section started__react__html'>
                    <h2>React In Html</h2>
                    <p> <LoremIpsum p={1} /> </p>
                </div>

                <div className='started__section started__react__setup'>
                    <h2>Setting up and running react</h2>
                    <p> <LoremIpsum p={1} /> </p>
                </div>

            </div>
        </div>
    )
}

export default GetStarted