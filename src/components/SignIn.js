import { useState } from "react"
import axios from "axios"

export default function SignIn() {
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
            method: "POST",
            url: "http://localhost:3030/signin",
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
            New User
            <br />
            <input placeholder="Username" onChange={handleUserChange} />
            <br />
            <input placeholder="Password" onChange={handlePassChange} />
            <br />
            <button onClick={handleClick}>Sign In</button>
        </div>
    )
}
