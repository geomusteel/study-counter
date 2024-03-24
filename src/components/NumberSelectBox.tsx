import React, {useMemo} from "react";
import styled from "styled-components";

interface NumberSelectBoxProps {
    SelectNumber: number;
    gridArea: string;
    isSelected: boolean;
    onClick?: () => void;
}

interface StyledSelectBoxProps {
    $gridArea: string;
    $isSelected: boolean;
    onClick?: () => void;
}

const StyledNumberSelectBox = styled.div<StyledSelectBoxProps>`
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: ${(props) =>
            props.$isSelected ? "0px solid #cccccc;" : "1px solid #cccccc;"};
    font-size: 30px;
    grid-area: ${(props) => props.$gridArea};
    background-color: ${(props) => (props.$isSelected ? "#e68652" : "white")};
    color: ${(props) => (props.$isSelected ? "white" : "black")};
    cursor: pointer;
    user-select: none;
    transition: background-color 0.1s ease, color 0.1s ease;

    &:hover {
        background-color: ${(props) =>
                props.$isSelected ? "#dd804d" : "#f1f1f1"}; // 마우스 오버 시의 배경색
    }

    &:active {
        background-color: ${(props) =>
                props.$isSelected ? "#cf7342" : "#ececec"}; // 클릭 중일 때의 배경색
    }
`;

export const NumberSelectBox = ({
                                    SelectNumber,
                                    gridArea,
                                    isSelected,
                                    onClick,
                                }: NumberSelectBoxProps) => {
    console.log("NumberSelectBox loading");
    return (
        <StyledNumberSelectBox
            $gridArea={gridArea}
            $isSelected={isSelected}
            onClick={onClick}
        >
            {SelectNumber}
        </StyledNumberSelectBox>
    );
};

export default NumberSelectBox;
