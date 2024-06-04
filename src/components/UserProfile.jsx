import { UserAge } from "./profileComponents/UserAge"
import { UserEmail } from "./profileComponents/UserEmail"
import { UserHobbies } from "./profileComponents/UserHobbies"
import { UserUsername } from "./profileComponents/UserUsername"

export const UserProfile = () => {
    const age = 21
    const username = "Seb"
    const hobbies = ["Coding", "Training", "Circus"]
    const email = "seb@example.com"
    return <div>
        <UserUsername username={username}/>
        <UserAge age={age}/>
        <UserEmail email={email}/>
        <section>
            <UserHobbies hobbies={hobbies}/>
        </section>
    </div>
}