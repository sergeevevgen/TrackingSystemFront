import { Help } from '@components/Help';
import { Home } from '@components/Home';
import { Qr } from '@components/Qr';
import { Timetable } from '@components/Timetable';
import { Link } from '@type/common';
import { QRScanner } from '@components/QRScanner';
import React from 'react';


const onNewScanResult = (decodedText: string, decodedResult: any) => {
    console.log("qr");
};

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
        title: 'QR-код',
        link: '/qr-scan',
        element: <QRScanner 
        fps={60}
        qrbox={250}
        disableFlip={false}
        qrCodeSuccessCallback={onNewScanResult}/>,
    },
    {
        title: 'Отчеты',
        link: '/help',
        element: <Help />,
    },
    {
        title: 'Профиль',
        link: '/todo',
        element: null
    },
];