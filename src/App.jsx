import { Counter } from "./components/Counter"
import { LoginForm } from "./components/LoginForm"
import { HomePage } from "./components/HomePage"


export const App = () => {
    const isAuthenticated = true

    window.addEventListener('resize', (e) => {
        console.log(`X size: ${window.innerWidth}px\nY size: ${window.innerHeight}px`)
    })

    return (  
    <>
        <HomePage isAuthenticated={isAuthenticated}/>
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