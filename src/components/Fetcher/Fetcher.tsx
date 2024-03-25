import React, { PropsWithChildren, useEffect } from 'react';
import { useAppDispatch } from '@store/index';
import { asyncAction } from '@store/actions';

type Props = {
    node: React.ReactNode
}

export const Fetcher: React.FunctionComponent<PropsWithChildren<Props>> = ({node}) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(asyncAction());
    }, []);

    return (
        <>{node}</>
    );
};
