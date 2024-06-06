import { LoginForm } from "./components/LoginForm"
import { UsersList } from "./components/UsersList"


export const App = () => {
    const isAuthenticated = false

    return (  
    <>
        <UsersList isAuthenticated={isAuthenticated}/>
        <br /><br />
        {
            !isAuthenticated? <LoginForm/> : null
        }
    </>
    )
}