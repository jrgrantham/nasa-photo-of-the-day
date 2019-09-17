import React from 'react';
import styled from 'styled-components';

const StyledMainHeading = styled.h1`
    background-color: palegreen;
    border: 1px solid black;
    border-radius: 20px;
    width: 80%;
    padding: 15px;
    margin: 10px auto;
`;

function Header() {
    return (
        <div>
            <StyledMainHeading>NASA Photo of the Day</StyledMainHeading>
        </div>
    )
}

export default Header;