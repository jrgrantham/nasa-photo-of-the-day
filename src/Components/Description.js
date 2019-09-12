import React from 'react';
import styled from 'styled-components';

const StyledDescription = styled.div`
    width: 80%;
    margin: 10px auto;
    text-align: justify;
    padding: 10px;
    border: 1px solid black;
    border-radius: 15px;
`;

const StyledH2 = styled.h2`
    text-align: center;
`;

function Description(props) {
    const {description} = props;
    return (
        <StyledDescription>
            <StyledH2>Description</StyledH2>
            <p>{description}</p>
        </StyledDescription>
    )
}

export default Description;