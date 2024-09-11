export type Osztaly = {
    evfolyam: number,
    betujel: 'A' | 'B' | 'C' | 'D'
}

export type Diak = {
    name: string,
    age: number,
    class: Osztaly
}