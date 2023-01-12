import { Routes, Route } from "react-router-dom"
import Accueil from "./components/Accueil"
import Header from "./components/Header"
import ListePokemons from "./components/ListePokemons"
import Pokedex from "./components/Pokedex"

export default function App() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<Accueil />} />
                <Route path="/pokemons" element={<ListePokemons />} />
                <Route path="/pokedex" element={<Pokedex />} />
            </Routes>
        </div>
    )
}
