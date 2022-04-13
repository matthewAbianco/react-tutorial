import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import ReactTutorial from '../../components/reactTutorial/ReactTutorial'
import CatchPage from '../../components/catchPage/CatchPage'



const CatchPageRoute = () => {
    return (
        <div className='container'>
            <Navbar />
            <div className='body'>
                <div className='body__sidebar'>
                    <ReactTutorial />
                </div>
                <div className='body__home'>
                    <CatchPage />
                </div>
            </div>
        </div>
    )
}

export default CatchPageRoute