import { PropTypes } from 'prop-types'
import { UserDetails } from "./UserDetails"

export const UsersList = ({isAuthenticated}) => {
    const users= [
        { 
            age: 21,
            username: "Seb",
            hobbies: ["Coding", "Training", "Circus"],
            email: "seb@example.com",
        },
        { 
            age: 34,
            username: "Bob",
            hobbies: ["Linux", "Teaching", "Arts","History"],
            email: "bob@example.com",
        },
        { 
            age: 16,
            username: "July",
            hobbies: ["iOS", "Gymnastic", "Philosophy",],
            email: "july@example.com",
        },
        { 
            age: 43,
            username: "Alice",
            hobbies: ["Gaming", "Painting",],
            email: "alice@example.com",
        },
        
    ]
    
    // userType: ADMIN | COMMON | DISABLED
    const userType = "COMMON"

    const renderedUsers = <div className="flex gap-5 justify-center">
        {users.map(u => (
            <UserDetails user={u} key={u.email}/>
        ))}
    </div>

    let userContent; 
    switch (userType) {
        case "ADMIN":
            userContent = renderedUsers
            break
        case "COMMON":
            userContent = <h1 className="text-blue-500 p-3 
                                        font-semibold text-center 
                                        border-blue-900 rounded-xl 
                                        border-solid border-2 w-fit">
                Welcome and nice to meet you !
            </h1>
            break
        default:
            userContent = <h1 className="text-gray-500 p-3
                                font-semibold text-center
                                border-gray-900 rounded-xl
                                border-solid border-2 w-fit">
                Sorry your account was disabled...
            </h1>
    }

    return <div>
        <section className="flex items-center justify-center flex-col">
            <h1 className="text-2xl font-bold text-center p-5">Current Users</h1>
            {isAuthenticated ? userContent : 
                <h1 className="text-red-500 p-3 
                                font-semibold text-center 
                                border-red-900 rounded-xl 
                                border-solid border-2 w-fit">
                    !! You must be logged in to see list of users !!
                </h1>}
        </section>
    </div>
}

UsersList.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
}