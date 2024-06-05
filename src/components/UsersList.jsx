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
                <div className="flex flex-col py-5 bg-slate-500 shadow-md w-36 rounded-lg">
                    <h1 className="font-semibold text-center">{u.username}</h1>
                    <p className="italic text-center text-xs">{u.email}</p>
                    <p className="text-center">
                        <span className="font-thin">Age:</span> 
                        <span className={u.age < 18 ? "bg-cyan-500 rounded-md":''}> {u.age}</span></p>
                    <br/>
                    <div>
                        <p className="text-center underline pb-2">&#x2022; Hobbies &#x2022;</p>
                        <ul className="flex flex-col gap-1 items-center">
                            {u.hobbies.map(h => 
                                <li className="bg-gray-600 w-28 rounded-xl text-center justify-center">{h}</li>
                                )}
                        </ul>
                    </div>
                </div>
            ))}
            </div>
        </section>
    </div>
}