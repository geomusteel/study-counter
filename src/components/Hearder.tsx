import React from "react";
import styled from "styled-components";

const StyledHeader = styled.div`
    border-radius: 15px;
    border: 1px solid #cccccc;
    grid-area: HD;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 40px;
    gap: 25px;
    font-family: "Fugaz One", sans-serif;
    font-weight: 400;
    font-style: normal;
    color: #e68652;
`;

export const Header = () => {
    const text = "COUNTER";
    const spacedText = text.split("").map((char, index) => (
        <span key={index} style={{marginTop: "6px"}}>
      {char}
    </span>
    ));
    return <StyledHeader>{spacedText}</StyledHeader>;
};

export default Header;
