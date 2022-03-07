import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import ReactHooks from '../../components/reactHooks/ReactHooks'
import UseRef from '../../components/reactHooks/hooksOptions/useRef/UseRef'

const HooksUseRef = () => {
    return (
        <div className='container'>
            <Navbar />
            <div className='body'>
                <div className='body__sidebar'>
                    <ReactHooks />
                </div>
                <div className='body__home'>
                    <UseRef />
                </div>
            </div>
        </div>
    )
}

export default HooksUseRef