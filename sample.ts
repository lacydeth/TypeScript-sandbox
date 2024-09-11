let username: string = "bankuti.laszlo"
let age: number = 18;
let driverLicense: boolean = false;

let numbers: number[] = [1,2,3];
let matrix: number[][] = [[1,2,3], [1,2,3]];

type CountryCode = 'H' | 'GB' | "CH" | "I";

interface IDriver {
    name: string,
    age: number,
    validDriverLicense: boolean,
    blackDots: number,
    countryCode: CountryCode
}
interface IDriver {
    bloodAlcohol: number
}
let tomi: IDriver = {
    name: "Tamás",
    age: 18,
    validDriverLicense: false,
    blackDots: 5,
    countryCode: 'H',
    bloodAlcohol: 0.31
}

type Car = {
    carType: string,
    isGoing: boolean
}
type Airplane = {
    airplaneNumber: number,
    isFlying: boolean
}
type Vehicle = Car | Airplane

let mustang : Vehicle = {
    carType: "muscle",
    isGoing: false
}