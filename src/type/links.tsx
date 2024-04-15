import { Help } from '@components/Help';
import { Home } from '@components/Home';
import { Qr } from '@components/Qr';
import { Timetable } from '@components/Timetable';
import { Link } from '@type/common';
import React from 'react';

export const links: Link[] = [
    {
        title: 'Главная страница',
        link: '/',
        element: <Home />,
    },
    {
        title: 'Расписание',
        link: '/timetable',
        element: <Timetable />,
    },
    {
        title: 'QR-код',
        link: '/qr',
        element: <Qr />,
    },
    {
        title: 'Помощь',
        link: '/help',
        element: <Help />,
    },
    {
        title: 'TODO',
        link: '/todo',
        element: null
    },
];