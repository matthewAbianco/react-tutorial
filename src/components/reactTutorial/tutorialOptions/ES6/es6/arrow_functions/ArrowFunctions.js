import React from 'react'
import './ArrowFunctions.css'
import { LoremIpsum } from 'react-lorem-ipsum'

import oneBefore from './assets/oneBefore.png'
import twoWithArrowFunction from './assets/twoWithArrowFunction.png'
import threeDefaultReturnValue from './assets/threeDefaultReturnValue.png'
import fourWithParamaters from './assets/fourWithParamaters.png'
import fiveWithoutParentheses from './assets/fiveWithoutParentheses.png'

const ArrowFunctions = () => {
    return (
        <div className='container'>
            <div className='content'>
                <div className='af__section'>
                    <h2>Arrow Functions</h2>
                    <p> Arrow functions require less code to create than an regular function </p>
                </div>
                <div className='af__section'>
                    <h2>Before</h2>
                    <img src={oneBefore} alt='regular function' />
                </div>
                <div className='af__Section'>
                    <h2>With Arrow Functions</h2>
                    <img src={twoWithArrowFunction} alt='arrow function' />
                </div>
                <div className='af__Section'>
                    <h2>Arrow Functions returning a value by default </h2>
                    <img src={threeDefaultReturnValue} alt='return value by default' />
                </div>
                <div className='af__Section'>
                    <h2>Arrow Function with parameters</h2>
                    <img src={fourWithParamaters} alt='arrow function with paramaters' />
                </div>
                <div className='af__Section'>
                    <h2>Arrow Function without parentheses</h2>
                    <img src={fiveWithoutParentheses} alt='arrow function without paraentheses' />
                </div>
            </div>
        </div>
    )
}

export default ArrowFunctions