import { useState } from "react"

export const LoginForm = () => {
    //const [usernameState, setUsername] = useState('')
    //const [passwordState, setPassword] = useState('')
    const [loginState, setLogin] = useState({
        username: '',
        password: ''
    })

    const handleChange = (changeEvent) => {
        console.log(`****
        CHANGE EVENT
        Event trigger: ${changeEvent.currentTarget.id}
        Event value: ${changeEvent.currentTarget.value}
        ****`)
        setLogin({
            ...loginState,
            [changeEvent.currentTarget.id]: changeEvent.currentTarget.value
        })
    }
    const handleBlur = (blurEvent) => {
        console.log(`****
        BLUR EVENT
        Event trigger: ${blurEvent.currentTarget.id}
        Event value: ${blurEvent.currentTarget.value}
        ****`)
    }
    const handleSubmit = (submitEvent) => {
        submitEvent.preventDefault()
        console.log(`****
        -- SUBMIT EVENT --
        `)
        console.log(loginState)
        // fetch('http://login-backend/api/login',{
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(loginState)
        // })
    }

    const formIsNotComplete = !loginState.username || !loginState.password
    
    return (
        <div className="flex flex-col items-center">
            <form className="bg-blue-800 w-fit p-6 gap-2
                            flex flex-col items-center rounded-lg shadow-lg"
                            id="login-form"
                            onSubmit={handleSubmit}>
            <h1 className="text-3xl font-extrabold pb-3 italic">Please Login</h1>
            <div>
                <label className="text-xs" htmlFor="username">Username</label><br />
                <input className="rounded-lg px-1 font-thin italic bg-blue-950" 
                    type="text" id="username"
                    onChange={handleChange}
                    //onChange={(e) => {setUsername(e.currentTarget.value)}}
                    value={loginState.username}
                    onBlur={handleBlur}/>
            </div>
            <div>
                <label className="text-xs" htmlFor="password">Password</label><br />
                <input className="rounded-lg px-1 bg-blue-950" 
                    type="password" id="password"
                    onChange={handleChange}
                    //onChange={(e) => {setPassword(e.currentTarget.value)}}
                    value={loginState.password}
                    onBlur={handleBlur}/>
            </div>
            <br />
            <input className={`border-2 py-1 px-2 rounded-md 
                            ${formIsNotComplete?
                                "border-gray-950 bg-gray-600 text-gray-400":
                                "border-blue-950 bg-blue-600 hover:bg-blue-400 hover:border-blue-500"} 
                            `}
                    type="submit" disabled={formIsNotComplete}
                    value="Login" />
            </form>
        </div>
    )
}