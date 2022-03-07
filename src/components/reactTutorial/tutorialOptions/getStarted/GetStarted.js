import React from 'react'
import './GetStarted.css'
import { LoremIpsum } from 'react-lorem-ipsum'

const GetStarted = () => {
    return (
        <div className='container'>
            <div className='content'>

                <div className='title'>
                    <h2>Starting React</h2>
                    <p> <LoremIpsum p={1} /> </p>
                </div>

                <div className='react__html'>
                    <h2>react In Html</h2>
                    <p> <LoremIpsum p={1} /> </p>
                </div>

                <div className='react__setup'>
                    <h2>Setting up and running react</h2>
                    <p> <LoremIpsum p={1} /> </p>
                </div>

            </div>
        </div>
    )
}

export default GetStarted