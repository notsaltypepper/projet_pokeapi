import { useState } from "react"

export default function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleUserChange = (event) => {
        setUsername(event.target.value)
    }
    const handlePassChange = (event) => {
        setPassword(event.target.value)
    }

    console.log(username)
    console.log(password)

    return (
        <div>
            Login
            <br />
            <input placeholder="Username" onChange={handleUserChange} />
            <br />
            <input placeholder="Password" onChange={handlePassChange} />
            <br />
            <button>Login</button>
            <br />
            <button>Sign In</button>
        </div>
    )
}
