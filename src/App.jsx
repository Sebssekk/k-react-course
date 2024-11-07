import { Counter } from "./components/Counter"
import { LoginForm } from "./components/LoginForm"
import { HomePage } from "./components/HomePage"
import { useState } from "react"


export const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(true)

    window.addEventListener('resize', (e) => {
        console.log(`X size: ${window.innerWidth}px\nY size: ${window.innerHeight}px`)
    })

    return (  
    <>
        <HomePage isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated}/>
        <br /><br />
        {
            !isAuthenticated? 
                <>
                    <Counter/>
                    <LoginForm/>
                </> : null
        }
    </>
    )
}