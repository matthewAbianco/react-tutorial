import React from 'react'
import './Intro.css'
import { LoremIpsum } from 'react-lorem-ipsum'

const Intro = () => {
    return (
        <div className='container'>
            <div className='content'>

                <div className='title'>
                    <h2>What Is React?</h2>
                    <p> <LoremIpsum p={1} /> </p>
                </div>

                <div className='react__how'>
                    <h2>How Does React Work?</h2>
                    <p> <LoremIpsum p={1} /> </p>
                </div>

                <div className='react__history'>
                    <h2>History of React Js</h2>
                    <p> <LoremIpsum p={1} /> </p>
                </div>

            </div>
        </div>
    )
}

export default Intro