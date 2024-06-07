import { Counter } from "./components/Counter"
import { LoginForm } from "./components/LoginForm"
import { UsersList } from "./components/UsersList"


export const App = () => {
    const isAuthenticated = false

    window.addEventListener('resize', (e) => {
        console.log(`X size: ${window.innerWidth}px\nY size: ${window.innerHeight}px`)
    })

    return (  
    <>
        <UsersList isAuthenticated={isAuthenticated}/>
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