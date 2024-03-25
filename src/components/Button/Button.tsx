import React, { useState } from "react";
import { useSelector } from "react-redux"; 
import { selectCurrencies } from '@store/selectors';
import { Props } from "@type/common";

import * as S from './Button.styled'

export const Button: React.FunctionComponent<Props> = (props) => {
    const currencies = useSelector(selectCurrencies);
    const [isRed, setIsRed] = useState<boolean>(true);

    return (
        <>
            <S.StyledButton 
                isRed={isRed} 
                onClick={() => {
                    setIsRed(!isRed)
                }}
            >
                {props.title}
                {props.count}
            </S.StyledButton>
            <div>USD = {currencies.usd}</div>
        </>
    );
};