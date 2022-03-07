import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import ReactHooks from '../../components/reactHooks/ReactHooks'
import UseReducer from '../../components/reactHooks/hooksOptions/useReducer/UseReducer'

const HooksUseReducer = () => {
    return (
        <div className='container'>
            <Navbar />
            <div className='body'>
                <div className='body__sidebar'>
                    <ReactHooks />
                </div>
                <div className='body__home'>
                    <UseReducer />
                </div>
            </div>
        </div>
    )
}

export default HooksUseReducer