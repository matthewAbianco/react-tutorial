import React from 'react'
import './ArrowFunctions.css'
import { LoremIpsum } from 'react-lorem-ipsum'

const ArrowFunctions = () => {
    return (
        <div className='container'>
            <div className='content'>
                <div className='af__section'>
                    <h2>Arrow Functions</h2>
                    <p> Arrow functions reduce the length of a function syntax</p>
                </div>
                <div className='af__section'>
                    <h2>Before</h2>
                </div>
                <div className='af__Section'>
                    <h2>With Arrow Functions</h2>
                </div>
                <div className='af__Section'>
                    <h2>Arrow Functions returning a value by default </h2>
                </div>
                <div className='af__Section'>
                    <h2>Arrow Function with parameters</h2>
                </div>
                <div className='af__Section'>
                    <h2>Arrow Function without parameters</h2>
                </div>
                <div className='af__Section'>
                    <h2>Keyword "this"</h2>
                    <LoremIpsum p={1} />
                </div>
                <div className='af__Section'>
                    <h2>Arrow Function with parameters</h2>
                </div>
            </div>
        </div>
    )
}

export default ArrowFunctions