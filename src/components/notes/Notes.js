import React from 'react'
import './Notes.css'
import methodInObject from './assets/methodInObject.png'
import methodInObjectConsoleLog from './assets/methodInObjectConsoleLog.png'
import thisAsGlobal from './assets/thisAsGlobal.png'
import thisAsGlobalConsoleLog from './assets/thisAsGlobalConsoleLog.png'


const Notes = () => {
    return (
        <div className='notes__container'>
            <div className='notes__content'>
                <div className='notes__section'>

                </div>
                <div className='notes__section'>
                    <h3> Class components</h3>
                    <p>Class components became 'outdated' in 2018 with the
                        introduction of hooks in react V16.7 back in 2018.
                        Because it is now a 4-year-old method of creating components.
                        I have chosen to focus on learning how to crate functional components.  </p>
                </div>
                <div className='notes__section'>
                    <h3> Javascript "this" keyword in react</h3>
                    <p></p>

                    <div className='this__images'>
                        <div>
                            <h2>"this" when being used as a method in an object</h2>
                            <p> Becuase the drive() function is in the "car" object, it references the object itself. </p>
                            <div>
                                <img src={methodInObject} alt="method in object" />
                                <img src={methodInObjectConsoleLog} alt="method in object console.log" />
                            </div>
                        </div>
                        <div>
                            <h2>"this" when used in a function shows the "window" in browser</h2>
                            <div>
                                <img src={thisAsGlobal} alt="this as global" />
                                <img src={thisAsGlobalConsoleLog} alt="this as global console.log" />
                            </div>
                        </div>

                    </div>
                </div>
                <div className='notes__section'>

                </div>
                <div className='notes__section'>

                </div>

            </div>
        </div>
    )
}

export default Notes