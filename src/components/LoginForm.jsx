export const LoginForm = () => {
    
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
        Event trigger: ${submitEvent.target.id}
        ****`)
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
                    onChange={handleChange}
                    onBlur={handleBlur}/>
            </div>
            <div>
                <label className="text-xs" htmlFor="password">Password</label><br />
                <input className="rounded-lg px-1 bg-blue-950" 
                    type="password" id="password"
                    onChange={handleChange}
                    onBlur={handleBlur}/>
            </div>
            <br />
            <input className="border-2 py-1 px-2 rounded-md 
                            border-blue-950 bg-blue-600" 
                    type="submit" value="Login" />
            </form>
        </div>
    )
}