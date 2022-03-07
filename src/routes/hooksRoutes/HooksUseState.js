import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import ReactHooks from '../../components/reactHooks/ReactHooks'
import UseState from '../../components/reactHooks/hooksOptions/useState/UseState'

const HooksUseState = () => {
    return (
        <div className='container'>
            <Navbar />
            <div className='body'>
                <div className='body__sidebar'>
                    <ReactHooks />
                </div>
                <div className='body__home'>
                    <UseState />
                </div>
            </div>
        </div>
    )
}

export default HooksUseState