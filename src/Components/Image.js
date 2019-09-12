import React from 'react';

function Image(props) {
    const {src} = props;
    return (
        <div>
            <img src={src} alt='view of space' />
        </div>
    )
}

export default Image;