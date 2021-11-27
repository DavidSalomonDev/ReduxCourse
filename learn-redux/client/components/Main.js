import React, { cloneElement } from 'react';
import { Link } from 'react-router';

const Main = (props) => {
    return (
        <div>
            <h1>
                <Link to='/'>Davidstagram</Link>
            </h1>
            {cloneElement(props.children, props)}
        </div>
    );
};

export default Main;
