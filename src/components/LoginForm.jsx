export const LoginForm = () => {
    return (
        <div className="flex flex-col items-center">
            <div className="bg-blue-800 w-fit p-6 gap-2
                            flex flex-col items-center rounded-lg shadow-lg">
            <h1 className="text-3xl font-extrabold pb-3 italic">Please Login</h1>
            <div>
                <label className="text-xs" htmlFor="username">Username</label><br />
                <input className="rounded-lg px-1 font-thin italic bg-blue-950" 
                    type="text" id="username"/>
            </div>
            <div>
                <label className="text-xs" htmlFor="password">Password</label><br />
                <input className="rounded-lg px-1 bg-blue-950" 
                    type="password" id="password"/>
            </div>
            <br />
            <input className="border-2 py-1 px-2 rounded-md 
                            border-blue-950 bg-blue-600" 
                    type="button" value="Login" />
            </div>
        </div>
    )
}