import { useState, useEffect } from "react"

export default function ListePokemonsTest() {
    const [offset, setOffset] = useState(20)
    const [pageId, setPageId] = useState(1)
    const [pokemonUrl, setPokemonUrl] = useState([])
    const [type, setType] = useState([])

    const [url, setUrl] = useState({
        current: "https://pokeapi.co/api/v2/pokemon/",
        next: null,
        previous: null,
    })

    const nextUrl = () => {
        const newUrl = {
            current: url.next,
            previous: url.current,
            next: null,
        }
        setUrl(newUrl)
        setOffset(offset + 20)
        setPageId(pageId + 20)
    }

    const previousUrl = () => {
        const newUrl = {
            current: url.previous,
            previous: null,
            next: url.current,
        }
        setUrl(newUrl)
        setOffset(offset - 20)
        setPageId(pageId - 20)
    }

    useEffect(() => {
        pokemonUrl.length = 0
        type.length = 0
        fetch(url.current)
            .then((res) => res.json())
            .then((data) => {
                setPokemonUrl(data.results)
                setUrl({
                    current: url.current,
                    next: data.next,
                    previous: data.previous,
                })
                pokemonUrl.push(...data.results.map((url) => url.url))
                pokemonUrl.forEach((url) => {
                    fetch(url)
                        .then((res) => res.json())
                        .then((data) => {
                            setType([
                                ...type,
                                ...data.types.map((type) => type.type.name),
                            ])
                            type.push(
                                data.types
                                    .map((type) => type.type.name)
                                    .join(", ")
                            )
                        })
                        .catch((err) => console.error(err))
                })
            })
            .catch((err) => console.error(err))
    }, [url.current])

    return (
        <div>
            ListePokemons
            <ul>
                {pokemonUrl.map((pokemon, i) => (
                    <li key={i}>
                        <img
                            src={
                                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
                                (pageId + i) +
                                ".png"
                            }
                            alt=""
                        />
                        <br />
                        Name: {pokemon.name}
                        <br />
                        Id: {pageId + i}
                        <br />
                        Type(s): {type[i]}
                        <br />
                        <button>Add</button>
                    </li>
                ))}
            </ul>
            {url.previous && <button onClick={previousUrl}>Previous</button>}
            {url.next && <button onClick={nextUrl}>Next</button>}
        </div>
    )
}
