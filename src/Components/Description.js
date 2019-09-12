import React from 'react';
import styled from 'styled-components';

const StyledDescription = styled.div`
    width: 80%;
    margin: auto;
    text-align: justify;
`;

const styledH2 = styled.h2`
    text-align: center;
`;

function Description(props) {
    const {description} = props;
    return (
        <StyledDescription>
            <styledH2>Description</styledH2>
            <p>{description}</p>
        </StyledDescription>
    )
}

export default Description;