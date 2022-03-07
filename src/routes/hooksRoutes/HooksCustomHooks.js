import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import ReactHooks from '../../components/reactHooks/ReactHooks'
import CustomHooks from '../../components/reactHooks/hooksOptions/customHooks/CustomHooks'

const HooksCustomHooks = () => {
    return (
        <div className='container'>
            <Navbar />
            <div className='body'>
                <div className='body__sidebar'>
                    <ReactHooks />
                </div>
                <div className='body__home'>
                    <CustomHooks />
                </div>
            </div>
        </div>
    )
}

export default HooksCustomHooks