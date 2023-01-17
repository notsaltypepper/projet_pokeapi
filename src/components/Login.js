import { useState } from "react"
import axios from "axios"

export default function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [userData, setUserData] = useState({
        username: username,
        password: password,
    })

    const handleUserChange = (event) => {
        setUsername(event.target.value)
    }
    const handlePassChange = (event) => {
        setPassword(event.target.value)
    }

    const handleClick = () => {
        setUserData({ username, password })
        axios({
            method: "GET",
            url: "http://localhost:3030/login",
            data: {
                username: username,
                password: password,
            },
        })
    }

    console.log(username)
    console.log(password)
    console.log(userData)

    return (
        <div>
            Login
            <br />
            <input placeholder="Username" onChange={handleUserChange} />
            <br />
            <input placeholder="Password" onChange={handlePassChange} />
            <br />
            <button onClick={handleClick}>Login</button>
            <br />
            <a href="/signin">
                <button>Sign In</button>
            </a>
        </div>
    )
}
