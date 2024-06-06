import { UserDetails } from "./UserDetails"

export const UsersList = () => {
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

    return <div>
        <section>
            <h1 className="text-2xl font-bold text-center p-5">Current Users</h1>
            <div className="flex gap-5 justify-center">
            {users.map(u => (
                <UserDetails user={u} key={u.email}/>
            ))}
            </div>
        </section>
    </div>
}