import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import ReactHooks from '../../components/reactHooks/ReactHooks'
import UseContext from '../../components/reactHooks/hooksOptions/useContext/UseContext'

const HooksUseContext = () => {
    return (
        <div className='container'>
            <Navbar />
            <div className='body'>
                <div className='body__sidebar'>
                    <ReactHooks />
                </div>
                <div className='body__home'>
                    <UseContext />
                </div>
            </div>
        </div>
    )
}

export default HooksUseContext