type Test = {
    string: string,
    number: number,
    boolean: boolean,

    array1: boolean[],
    array2: Array<boolean>,
}

const a: keyof Test = 'array1';

type Car = {
   wheelCount: number,
   withWindowInFloor: boolean | undefined | null,
   os: CarDeviceOS.ANDROID
}

type CarDevice = {
    os: 'IOS' | 'Android'
}

enum CarDeviceOS {
    IOS = 'IOS',
    ANDROID = 'Android',
}

const ChipCar: Car = {
   wheelCount: 0,
   withWindowInFloor: undefined,
   os: CarDeviceOS.ANDROID,
}

function getCarDevice(a: any, b: string): CarDeviceOS {
    return null;
}

type GetCarDevice = (car: Car) => CarDeviceOS

const getCarDeviceOs = (a: any): CarDeviceOS => {

    return CarDeviceOS.ANDROID;
}
