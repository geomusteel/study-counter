import React from "react";
import styled from "styled-components";

interface HistoryBoxProps {
    HistoryNumber: number;
    gridArea: string;
}

interface StyledHistoryBoxProps {
    $gridArea: string;
}

const StyledHistoryBox = styled.div<StyledHistoryBoxProps>`
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #cccccc;
    grid-area: ${(props) => props.$gridArea};
    font-size: 20px;
    color: #999999;
`;

export const HistoryBox = ({HistoryNumber, gridArea}: HistoryBoxProps) => {
    return (
        <StyledHistoryBox $gridArea={gridArea}>{HistoryNumber}</StyledHistoryBox>
    );
};

export default HistoryBox;
