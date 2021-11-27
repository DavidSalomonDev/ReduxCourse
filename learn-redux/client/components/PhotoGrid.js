import React from 'react';
import Photo from './Photo';

const PhotoGrid = (props) => {
    return (
        <div className='photo-grid'>
            {props.posts.map((post, idx) => <Photo key={idx} idx={idx} {...props} post={post} />)}
        </div>
    );
};

export default PhotoGrid;
