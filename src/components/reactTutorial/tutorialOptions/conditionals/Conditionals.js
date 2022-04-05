import React from 'react'
import './Conditionals.css'

import And from './assets/And.png'
import If from './assets/If.png'
import Ternary from './assets/Ternary.png'


const Conditionals = () => {
    return (
        <div className='conditionals__container'>
            <div className='conditionals__content'>
                <div className='conditinals__section'>
                    <h1>Conditionals</h1>
                    <p>Components can be conditionally rendered with multiple ways of accomplishing this</p>
                </div>
                <div className='conditinals__section'>
                    <h2>"if" Statement</h2>
                    <p>The JavaScript 'if' operator can be used to render Components</p>
                    <img src={If} alt="" />
                </div>
                <div className='conditinals__section'>
                    <h2>Logical "&&" Operator</h2>
                    <p>"Another way to conditionally render a React component is by using the && operator."</p>
                    <img src={And} alt="" />
                </div>
                <div className='conditinals__section'>
                    <h2>Ternary Operator</h2>
                    <p>The Ternary Operaotr is essentially the "if" operator.</p>
                    <img src={Ternary} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Conditionals