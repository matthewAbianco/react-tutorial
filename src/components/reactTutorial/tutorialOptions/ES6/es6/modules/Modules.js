import React from 'react'
import './Modules.css'

import namedExports from './assets/namedExports.png'
import namedExportsAllAtOnce from './assets/namedExportsAllAtOnce.png'
import defaultExport from './assets/defaultExport.png'
import importFromNamedExports from './assets/importFromNamedExports.png'
import importFromDefaultExports from './assets/defaultExport.png'

const Modules = () => {
    return (
        <div className='modules__container'>
            <div className='modules__content'>
                <div className='modules__section'>
                    <h1>Modules</h1>
                    <p>Javascript modules lets code be broken up into seperate files. Making it easier to manage code.</p>
                    <p> ES Modules work on 'import' and 'export' statements in a code. </p>
                    <p>Their are two ways to export code form a file. Named export and Default export </p>
                </div>
                <div className='modules__section'>
                    <h2>Export</h2>
                    <p> Functions and Variables can be exported from any file</p>
                    <p>Their are two types of export, "named" and "default".</p>
                </div>
                <div className='modules__section'>
                    <h2>Named Exports</h2>
                    <p>Their are two ways to create named exports. In-line or collectively at the bottom</p>
                </div>
                <div className='modules__section'>
                    <h3>In-line</h3>
                    <img src={namedExports} alt="" />
                </div>
                <div className='modules__section'>
                    <h3>Collectively at the bottom</h3>
                    <img src={namedExportsAllAtOnce} alt="" />
                </div>
                <div className='modules__section'>
                    <h2>Default Exports</h2>
                    <p>Their can only be one default export per file</p>
                </div>
                <div className='modules__section'>
                    <h3>Default Export Example</h3>
                    <p> This takes a function and allows the entire function to be used in another file</p>
                    <img src={defaultExport} alt="" />
                </div>
                <div className='modules__section'>
                    <h2>Import</h2>
                    <p>Files can be imported in one of two ways. Depending on if they are a default export or named export.</p>
                </div>
                <div className='modules__section'>
                    <h3>Import from named exports</h3>
                    <p>Import named imports from './carInfo.js'</p>
                    <img src={importFromNamedExports} alt="" />
                </div>
                <div className='modules__section'>
                    <h3>Import from Default Export</h3>
                    <p>Imports a file from './carInfo.js' </p>
                    <img src={importFromDefaultExports} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Modules