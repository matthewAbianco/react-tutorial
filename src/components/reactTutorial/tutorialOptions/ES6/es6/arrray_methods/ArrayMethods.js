import React from 'react'
import './ArrayMethods.css'
import mapCode from './assets/mapCode.png'
import mapOutcome from './assets/mapOutcome.png'

const ArrayMethods = () => {
    return (
        <div className='am__container'>
            <div className='am__content'>
                <div className='am__section'>
                    <h1>Array Methods</h1>
                    <p>Javascript has an assortment of array methods, Which can be found here
                        <a href='https://www.w3schools.com/js/js_array_methods.asp' target='__blank'
                            className='home__about__section--anchor'> https://www.w3schools.com/js/js_array_methods.asp</a>.

                        But since we are discussing the new array methods with ES6, they are outside the scope of this lesson.
                    </p>

                    <p>For ES6, the new method introduced is called the "map()" array method. </p>
                    <p> This method runs a function on each item in the array, then returning a new result</p>
                    <p>This method is primarily used for creating lists</p>
                </div>
                <div className='am__section'>
                    <div>
                        <h3>map() code</h3>
                        <img src={mapCode} alt='map code' />
                    </div>
                    <div>
                        <h3> map outcome</h3>
                        <img src={mapOutcome} alt='map code' />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ArrayMethods