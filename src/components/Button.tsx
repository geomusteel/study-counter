import React from "react";
import styled from "styled-components";
import {BsTrash3} from "react-icons/bs";

interface ButtonProps {
    gridArea: string;
    onClick: () => void;
    text?: string;
    icon?: boolean;
}

interface StyledHistoryBoxProps {
    $gridArea: string;
    $icon?: boolean;
}

const StyledButton = styled.button<StyledHistoryBoxProps>`
    border-radius: 15px;
    border: 1px solid #cccccc;
    grid-area: ${(props) => props.$gridArea};
    cursor: pointer;
    background-color: transparent;
    outline: none;
    padding: 0;
    font-size: ${(props) => (props.$icon ? "30px" : "50px")};
    user-select: none;
    transition: background-color 0.1s ease, color 0.1s ease;

    &:hover {
        background-color: #f1f1f1; // 마우스 오버 시의 배경색
    }

    &:active {
        background-color: #ececec; // 클릭 중일 때의 배경색
    }
`;

export const Button = ({gridArea, onClick, text, icon}: ButtonProps) => {
    return (
        <StyledButton onClick={onClick} $gridArea={gridArea} $icon={icon}>
            {text}
            {icon && <BsTrash3 size="40" color="#999999"/>}
        </StyledButton>
    );
};

export default Button;
