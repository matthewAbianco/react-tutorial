import React from 'react'
import './Memo.css'

import Memoa from './assets/Memoa.png'

const Memo = () => {
    return (
        <div className='memo__container'>
            <div className='memo__content'>
                <div className='memo__section'>
                    <h1>Memo</h1>
                    <p>The "Memo" feature in React prevents a component from rendering if its props haven't been changed</p>
                    <p>This is a great way to improve performance</p>
                    <p>Memo gets applied at the bottom of a component where it gets exported</p>
                    <img src={Memoa} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Memo