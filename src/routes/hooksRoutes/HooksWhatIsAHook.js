import React from 'react'
import WhatIsAHook from '../../components/reactHooks/hooksOptions/whatIsAHook/WhatIsAHook'
import Navbar from '../../components/navbar/Navbar'
import ReactHooks from '../../components/reactHooks/ReactHooks'

const HooksWhatIsAHook = () => {
    return (
        <div className='container'>
            <Navbar />
            <div className='body'>
                <div className='body__sidebar'>
                    <ReactHooks />
                </div>
                <div className='body__home'>
                    <WhatIsAHook />
                </div>
            </div>
        </div>
    )
}

export default HooksWhatIsAHook