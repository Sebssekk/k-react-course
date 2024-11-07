import { useEffect, useState } from "react"
import { UserDetails } from "./UserDetails"

export const AdminView = () => {
    const [adding, toggleAdding] = useState(false)
    const [deleting, toggleDeleting] = useState(false)
    const [newUserState, setNewUserState] = useState({
        age: undefined,
        username: "",
        hobbies: "",
        email: "",
    }) 
    const [deleteUsername, setDeleteUsername] = useState("")
    const [users, setUsers] = useState([])
    //     { 
    //         age: 21,
    //         username: "Seb",
    //         hobbies: ["Coding", "Training", "Circus"],
    //         email: "seb@example.com",
    //     },
    //     { 
    //         age: 34,
    //         username: "Bob",
    //         hobbies: ["Linux", "Teaching", "Arts","History"],
    //         email: "bob@example.com",
    //     },
    //     { 
    //         age: 16,
    //         username: "July",
    //         hobbies: ["iOS", "Gymnastic", "Philosophy",],
    //         email: "july@example.com",
    //     },
    //     { 
    //         age: 43,
    //         username: "Alice",
    //         hobbies: ["Gaming", "Painting",],
    //         email: "alice@example.com",
    //     },
        
    // ])
    useEffect(() => {
        //fetch("https://jsonplaceholder.typicode.com/users").then(
        //    response => {
        //        response.json().then(payload => {
        //            console.log(payload)
        //            setUsers(payload)
        //        })
        //    }
        //)
        const fetchUsers = async () => {
            const res = await fetch("https://jsonplaceholder.typicode.com/users")
            const fetchedUsers = await res.json()
            setUsers(fetchedUsers)
        }
        fetchUsers()
    },[])

    useEffect(() => {
        console.log("Time to run...")
        document.title = `Users: ${users.length}`

        return () =>{
            // Clean up logic
            console.log("Unmounting the AdminView Component")
            document.title = `Vite + React`

        }

    }, [users])

    const renderedUsers = <div className="flex gap-5 justify-center flex-wrap ">
        {users.map(u => ( 
            <UserDetails user={u} key={u.email}/>
        ))}
    </div>

    const handleNewUserFormChange = (e) => {
        setNewUserState({
            ...newUserState,
            [e.currentTarget.id]: e.currentTarget.value
        })
    }
    const handleNewUSerFormSubmit = (e) => {
        e.preventDefault()
        const hobbiesArray = newUserState.hobbies.split(',')
        setUsers([...users, {
            ...newUserState,
            hobbies: hobbiesArray,
            age: parseInt(newUserState.age)
        }])
        toggleAdding(false)
        setNewUserState({
            age: undefined,
            username: "",
            hobbies: "",
            email: "",
        })
    }
    const handleDeleteUserFormSubmit = (e) => {
        e.preventDefault()
        setUsers([...users.filter(u => u.username !== deleteUsername)])
        toggleDeleting(false)
        setDeleteUsername("")
    }

    const AddUserForm =  <form className="flex flex-col gap-2 py-5 bg-slate-500 shadow-md w-fit rounded-lg"
            onSubmit={handleNewUSerFormSubmit}>
            <h1 className="text-center font-semibold text-xl">New User</h1>
            <input className="mx-5 rounded-md px-1 bg-gray-900 font-thin italic" type="text" placeholder="username" 
                id="username" onChange={handleNewUserFormChange} value={newUserState.username}/>
            <input className="mx-5 rounded-md px-1 bg-gray-900 font-thin italic" type="text" placeholder="email" 
                id="email" onChange={handleNewUserFormChange} value={newUserState.email}/>
            <input className="mx-5 rounded-md px-1 bg-gray-900 font-thin italic" type="number" placeholder="age" 
                id="age" onChange={handleNewUserFormChange} value={newUserState.age}/>
            <input className="mx-5 rounded-md px-1 bg-gray-900 font-thin italic" type="text" placeholder="hobby1,hobby2,..." 
                id="hobbies" onChange={handleNewUserFormChange} value={newUserState.hobbies}/>
            <button className="mx-5 rounded-md px-1 w-28 bg-blue-900 self-center mt-5 hover:bg-blue-700" type="submit">Add User</button>
        </form>
    const DeleteUserForm = <form className="flex flex-col gap-2 py-5 bg-slate-500 shadow-md w-fit rounded-lg"
                                onSubmit={handleDeleteUserFormSubmit}>
                                <h1 className="text-center font-semibold text-xl">Delete User by name</h1>
                                <input className="mx-5 rounded-md px-1 bg-gray-900 font-thin italic" type="text" placeholder="username to delete" 
                                    id="username2del" onChange={(e) => setDeleteUsername(e.currentTarget.value)} value={deleteUsername}/>
                                <button className="mx-5 rounded-md px-1 w-28 bg-blue-900 self-center mt-5 hover:bg-blue-700" type="submit">Delete User</button>
                            </form>

    return <>
            <div className='flex items-center gap-3 justify-center text-center'>
                <button className={`w-30 rounded-md flex p-2 
                                ${(!adding && !deleting)? "hover:bg-green-800 bg-green-900" : "bg-gray-600"}`}
                    onClick={(!adding && !deleting) ? () => toggleAdding(true) : null}
                    disabled={adding || deleting}
                >
                    <img src="https://cdn-icons-png.flaticon.com/512/992/992651.png" width={20} height={20} alt="add" /> 
                    <p className='px-2'>Add User</p>
                </button>
                <button className={`w-30 rounded-md flex p-2 
                                ${(!adding && !deleting) ?"hover:bg-red-800 bg-red-900" : "bg-gray-600"}`}
                    onClick={(!adding && !deleting) ? () => toggleDeleting(true) : null}
                    disabled={adding || deleting}
                >
                    <img src="https://static-00.iconduck.com/assets.00/delete-icon-1864x2048-bp2i0gor.png" width={20} height={20} alt="edit"/>
                    <p className='px-2'>Remove User</p>
                </button>
            </div>
            <br />
            {renderedUsers}
            <br />
            {adding ? AddUserForm: null}
            {deleting ? DeleteUserForm: null}
        </>
        
}