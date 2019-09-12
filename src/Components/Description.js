import React from 'react';

function Description(props) {
    const {description} = props;
    return (
        <div>
            <h2>Description</h2>
            <p>{description}</p>
        </div>
    )
}

export default Description;