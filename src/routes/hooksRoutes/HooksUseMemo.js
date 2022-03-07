import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import ReactHooks from '../../components/reactHooks/ReactHooks'
import UseMemo from '../../components/reactHooks/hooksOptions/useMemo/UseMemo'

const HooksUseMemo = () => {
    return (
        <div className='container'>
            <Navbar />
            <div className='body'>
                <div className='body__sidebar'>
                    <ReactHooks />
                </div>
                <div className='body__home'>
                    <UseMemo />
                </div>
            </div>
        </div>
    )
}

export default HooksUseMemo
