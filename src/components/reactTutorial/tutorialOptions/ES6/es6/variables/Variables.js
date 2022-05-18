import React from 'react'
import './Variables.css'

import variableKeyword from './assets/variableKeyword.png'
import letKeyword from './assets/letKeyword.png'
import constantKeyword from './assets/constantKeyword.png'



const Variables = () => {
    return (
        <div className='variable__container'>
            <div className='variable__content'>

                <div className='variable__section'>
                    <h1>Variables</h1>
                    <p> Prior to ES6, there was only one method of defining variables; and that was with the "var" keyword.
                        Now with ES6, there are two new ways of defining variables, "let" and "const". </p>
                </div>
                <div className='variable__section'>
                    <h2>var</h2>
                    <img src={variableKeyword} alt='variable' />
                    <ul>
                        <li>When 'var' is used outside of a function, it is apart of the global scope</li>
                        <li>When 'var' is used inside of a function, it's scope remains within the function</li>
                        <li>When 'var' is used inside of a block, the variable can still be called outside of the  block</li>
                        <p>var has scope in a function, not in a block</p>
                    </ul>
                </div>
                <div className='variable__section'>
                    <h2>let</h2>
                    <img src={letKeyword} alt='let' />
                    <ul>
                        <li>'let' is the opposite of 'var' as it is confined to the block which it is defined in</li>
                        <li>when 'let' is used inside of a block, the 'let' value is only availabe within the block</li>
                    </ul>
                    <p> 'let' is block scoped</p>
                </div>
                <div className='variable__section'>
                    <h2>const</h2>
                    <img src={constantKeyword} alt='const' />
                    <p>*'const' defines a constant referance to a value, it does not define a constant value*</p>

                    <p>You Cannot </p>
                    <ul>
                        <li>Reassign a constant value</li>
                        <li>Reassign a constant array</li>
                        <li>Reassign a constant object</li>
                    </ul>
                    <p>You Can</p>
                    <ul>
                        <li>Change the elements of constant array</li>
                        <li>Change the properties of constant object</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Variables