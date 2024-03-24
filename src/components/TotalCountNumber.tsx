import React from "react";
import styled from "styled-components";
import {BsExclamationCircleFill} from "react-icons/bs";

interface TotalCountNumberProps {
    count: number;
    isValidated: boolean;
}

const StyledTotalCountNumberWrap = styled.div`
    border-radius: 15px;
    border: 1px solid #cccccc;
    align-items: center;
    grid-area: a;
    position: relative;
    display: flex;
    justify-content: center;
`;

const StyledValid = styled.div`
    height: 50px;
    width: 330px;
    border-radius: 15px;
    border: 1px solid #cccccc;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 17px;
    font-family: "Lilita One", sans-serif;
    font-weight: 400;
    font-style: normal;
    color: #e68652;
    position: absolute;
    top: 10px;
    gap: 10px;
`;

const StyledTotalCountNumber = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 170px;
    font-family: "Kdam Thmor Pro", sans-serif;
    font-weight: 400;
    font-style: normal;
    top: 100px;
    color: #e68652;
`;

export const TotalCountNumber = ({
                                     count,
                                     isValidated,
                                 }: TotalCountNumberProps) => {
    return (
        <StyledTotalCountNumberWrap>
            {isValidated && (
                <StyledValid>
                    <BsExclamationCircleFill size="24"/>
                    숫자의 범위는 0~99까지 입니다.
                </StyledValid>
            )}
            <StyledTotalCountNumber>
                {count < 10 ? "0" + count : count}
            </StyledTotalCountNumber>
        </StyledTotalCountNumberWrap>
    );
};

export default TotalCountNumber;
