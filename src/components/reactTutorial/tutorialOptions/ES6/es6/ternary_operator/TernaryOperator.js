import React from 'react'
import './TernaryOperator.css'
import ifElse from './assets/ifElse.png'
import ternary from './assets/ternary.png'

const TernaryOperator = () => {
    return (
        <div className='ternary__container'>
            <div className='ternary__content'>
                <div className='ternary__section'>
                    <h1>Ternary Operator</h1>
                    <p>The ternary operator simplifies the syntax of a conditional operator like "if/else" statements</p>
                    <p>Ternary Operator Syntax: condition ? if condition true : if condition false</p>
                </div>
                <div className='ternary__section'>
                    <h3>Here is the old syntax for an "if/else" statement</h3>
                    <img src={ifElse} alt="" />
                </div>
                <div className='ternary__section'>
                    <h3>With Ternary</h3>
                    <img src={ternary} alt="" />
                </div>
            </div>
        </div>
    )
}

export default TernaryOperator