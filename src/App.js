import { Routes, Route } from "react-router-dom"
import Accueil from "./components/Accueil"
import Header from "./components/Header"
import ListePokemons from "./components/ListePokemons"
import Login from "./components/Login"
import Pokedex from "./components/Pokedex"
import SignIn from "./components/SignIn"

export default function App() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<Accueil />} />
                <Route path="/pokemons" element={<ListePokemons />} />
                <Route path="/pokedex" element={<Pokedex />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signin" element={<SignIn />} />
            </Routes>
        </div>
    )
}
