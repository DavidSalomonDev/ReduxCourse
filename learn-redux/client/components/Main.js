import React, { cloneElement } from 'react';
import { Link } from 'react-router'

const Main = ({ children, props }) => {
    return (
        <div>
            <h1>
                <Link to='/'>Davidstagram</Link>
            </h1>
            {cloneElement(children, props)}
        </div>
    )
}

export default Main
