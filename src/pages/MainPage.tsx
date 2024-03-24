import React, {useState, useEffect} from "react";
import {
    MainBox,
    TotalCountNumber,
    HistoryBox,
    Button,
    NumberSelectBox,
    Header,
} from "../components";

export const MainPage = () => {
    const [count, setCount] = useState<number>(0);
    const [countNumber, setCountNumber] = useState<number>(1);
    const [countHistory, setCountHistory] = useState<number[]>([]);
    const [isFirstChangeCheck, setIsFirstChangeCheck] = useState<boolean>(true);
    const [isValidated, setIsValidated] = useState<boolean>(false);

    const countChangeHandler = (value: string) => {
        if (value === "minus" && count - countNumber >= 0) {
            setCount(count - countNumber);
            countHistoryHandler();
            setIsValidated(false);
        } else if (value === "plus" && count + countNumber < 100) {
            setCount(count + countNumber);
            countHistoryHandler();
            setIsValidated(false);
        } else {
            setIsValidated(true);
        }
    };

    useEffect(() => {
        if (isValidated) {
            const timer = setTimeout((): void => {
                setIsValidated(false);
            }, 1500);

            return () => clearTimeout(timer);
        }
    }, [isValidated]);

    const removeHandler = (): void => {
        setCount(0);
        setCountHistory([]);
        setIsFirstChangeCheck(true);
        setIsValidated(false);
    };

    const countHistoryHandler = (): void => {
        if (count === 0 && isFirstChangeCheck) {
            setIsFirstChangeCheck(false);
        } else {
            setCountHistory((prev) => [count, ...prev.slice(0, 3)]);
        }
    };

    return (
        <MainBox>
            <Header/>
            <TotalCountNumber
                count={count}
                isValidated={isValidated}
            ></TotalCountNumber>
            {[1, 2, 3, 4].map((number: number) => (
                <HistoryBox
                    key={number}
                    gridArea={`H${number}`}
                    HistoryNumber={countHistory[number - 1]}
                ></HistoryBox>
            ))}
            <Button gridArea="f" icon={true} onClick={() => removeHandler()}/>
            <Button
                gridArea="g"
                text="-"
                onClick={() => countChangeHandler("minus")}
            />
            <Button
                gridArea="h"
                text="+"
                onClick={() => countChangeHandler("plus")}
            />
            {[1, 2, 3, 4, 5].map((number: number) => (
                <NumberSelectBox
                    key={number}
                    gridArea={`N${number}`}
                    SelectNumber={number}
                    isSelected={countNumber === number}
                    onClick={() => setCountNumber(number)}
                />
            ))}
        </MainBox>
    );
};
