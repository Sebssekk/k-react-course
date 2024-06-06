import { useState } from "react"

export const LoginForm = () => {
    const [usernameState, setUsername] = useState('')
    const [passwordState, setPassword] = useState('')

    const handleChange = (changeEvent) => {
        console.log(`****
        CHANGE EVENT
        Event trigger: ${changeEvent.currentTarget.id}
        Event value: ${changeEvent.currentTarget.value}
        ****`)
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
        console.log(`Username: ${usernameState}`)
        console.log(`Password: ${passwordState}`)
        // fetch('http://login-backend/api/login',{
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         username: usernameState,
        //         password: passwordState
        //     })
        // })
    }
    
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
                    //onChange={handleChange}
                    onChange={(e) => {setUsername(e.currentTarget.value)}}
                    value={usernameState}
                    onBlur={handleBlur}/>
            </div>
            <div>
                <label className="text-xs" htmlFor="password">Password</label><br />
                <input className="rounded-lg px-1 bg-blue-950" 
                    type="password" id="password"
                    //onChange={handleChange}
                    onChange={(e) => {setPassword(e.currentTarget.value)}}
                    value={passwordState}
                    onBlur={handleBlur}/>
            </div>
            <br />
            <input className={`border-2 py-1 px-2 rounded-md 
                            ${(!usernameState || !passwordState)?
                                "border-gray-950 bg-gray-600 text-gray-400":
                                "border-blue-950 bg-blue-600 hover:bg-blue-400 hover:border-blue-500"} 
                            `}
                    type="submit" disabled={!usernameState || !passwordState}
                    value="Login" />
            </form>
        </div>
    )
}