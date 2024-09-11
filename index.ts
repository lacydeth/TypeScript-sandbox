let username: string = "bankuti.laszlo"
let age: number = 18;
let driverLicense: boolean = false;

interface IDriver {
    name: string,
    age: number,
    validDriverLicense: boolean,
    blackDots: number,
    countryCode: 'H' | 'GB' | "CH" | "I"
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
