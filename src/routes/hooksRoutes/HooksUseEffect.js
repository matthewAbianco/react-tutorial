import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import ReactHooks from '../../components/reactHooks/ReactHooks'
import UseEffect from '../../components/reactHooks/hooksOptions/useEffect/UseEffect'
const HooksWhatIsAHook = () => {
    return (
        <div className='container'>
            <Navbar />
            <div className='body'>
                <div className='body__sidebar'>
                    <ReactHooks />
                </div>
                <div className='body__home'>
                    <UseEffect />
                </div>
            </div>
        </div>
    )
}

export default HooksWhatIsAHook