import { Link } from "react-router-dom"

export default function Header() {
    return (
        <div>
            <Link to="/">Accueil</Link>
            <Link to="/pokemons">Liste Pokemons</Link>
            <Link to="/pokedex">Pokedex</Link>
        </div>
    )
}
