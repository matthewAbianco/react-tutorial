import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import ReactHooks from '../../components/reactHooks/ReactHooks'
import UseCallback from '../../components/reactHooks/hooksOptions/useCallback/UseCallback'

const HooksUseCallback = () => {
    return (
        <div className='container'>
            <Navbar />
            <div className='body'>
                <div className='body__sidebar'>
                    <ReactHooks />
                </div>
                <div className='body__home'>
                    <UseCallback />
                </div>
            </div>
        </div>
    )
}

export default HooksUseCallback