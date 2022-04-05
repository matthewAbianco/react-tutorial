import React from 'react'
import './Lists.css'

import List from './assets/List.png'
import Keys from './assets/Keys.png'
import Outcome from './assets/Outcome.png'


const Lists = () => {
    return (
        <div className='lists__container'>
            <div className='lists__content'>
                <div className='lists__section'>
                    <h1>Lists In React</h1>
                    <p>Lists in React are rendered with a type of loop. With the "map()" method being the most common.</p>
                    <img src={List} alt="" />
                    <img src={Outcome} alt="" />
                </div>
                <div className='lists__section'>
                    <h2>Keys</h2>
                    <p>"Keys allow React to keep track of elements. This way, if an item is updated or removed, only that item will be re-rendered instead of the entire list."</p>
                    <p>"Keys need to be unique to each sibling. But they can be duplicated globally."</p>
                    <img src={Keys} alt="" />
                    <img src={Outcome} alt="" />

                </div>
            </div>
        </div>
    )
}

export default Lists