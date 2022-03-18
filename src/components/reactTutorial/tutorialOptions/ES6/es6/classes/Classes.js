import React from 'react'
import './Classes.css'
import oneSimpleClass from './assets/oneSimpleClass.png'
import twoClassObject from './assets/twoClassObject.png'
import threeMethodInClass from './assets/threeMethodInClass.png'
import fourClassInheritance from './assets/fourClassInheritance.png'


const Classes = () => {
    return (
        <div className='classes__container'>
            <div className='classes__content'>
                <div className='classes__section'>
                    <h1> DISCLAIMER!! </h1>
                    <p>
                        As of React version 16.7.0 "Functional components" have become over class constructor.
                        This change came about because React introuced a feature called "Hooks". That being said,
                        it is still valuable to learn about "Class components" as it will be alot of React legacy code
                        that is built with Class components.
                    </p>
                </div>
                <div className='classes__section'>
                    <h2>Simple Class constructor</h2>
                    <p>A class is a type of function, but instead of using the keyword function to initiate it, we use the keyword class, and the properties are assigned inside a constructor() method.</p>
                    <img className='teste' src={oneSimpleClass} alt='simple class component' />

                </div>
                <div className='classes__section'>
                    <h2>Creating an object with the simple Class constructor</h2>
                    <p>Now you can create objects using the Car class</p>
                    <img className='teste' src={twoClassObject} alt='class object' />
                </div>
                <div className='classes__section'>
                    <h2>Method in Classes</h2>
                    <p>You can add your own methods in a class. This example creates a method named "present"</p>
                    <img className='teste' src={threeMethodInClass} alt='Method in class' />
                    <p>As you can see in the example above, you call the method by referring to the object's method name followed by parentheses (parameters would go inside the parentheses).</p>
                </div>
                <div className='classes__section'>
                    <h2>Class Inheritance</h2>
                    <p> To create a class inheritance, use the extends keyword.
                        A class created with a class inheritance inherits all the methods from another class</p>
                    <img className='teste' src={fourClassInheritance} alt='' />
                </div>
            </div>
        </div>
    )
}

export default Classes