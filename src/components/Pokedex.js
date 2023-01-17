import { useState } from "react"

export default function Pokedex() {
    const [rand, setRand] = useState(0)
    const [coin, setCoin] = useState(4)

    const handleClick = () => {
        setRand((Math.random() * 1008) | 1)
        if (coin > 0) {
            setCoin(coin - 1)
        }
        console.log(rand)
        console.log(coin)
    }

    return (
        <div>
            Pokedex
            <br />
            Coins: {coin}
            <br />
            <button onClick={handleClick}>Get a random pokemon</button>
            <br />
            <br />
            <input></input>
            <button>Search</button>
        </div>
    )
}
