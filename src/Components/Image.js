import React from 'react';
import styled from 'styled-components';

const StyledImage = styled.img`
    width: 70%;
    height: auto;
    border-radius: 10px;
`;

function Image(props) {
    const {src} = props;
    return (
        <div>
            <StyledImage src={src} alt='view of space' />
        </div>
    )
}

export default Image;