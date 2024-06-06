import { PropTypes } from 'prop-types'
export const UserDetails = ({user}) => {
    return (
        <div key={user.email} className="flex flex-col py-5 bg-slate-500 shadow-md w-36 rounded-lg">
            <h1 className="font-semibold text-center">{user.username}</h1>
            <p className="italic text-center text-xs">{user.email}</p>
            <p className="text-center">
                <span className="font-thin">Age:</span> 
                <span className={user.age < 18 ? "bg-cyan-500 rounded-md":''}> {user.age}</span></p>
            <br/>
            <div>
                <p className="text-center underline pb-2">&#x2022; Hobbies &#x2022;</p>
                <ul className="flex flex-col gap-1 items-center">
                    {user.hobbies.map(h => 
                        <li key={h} className="bg-gray-600 w-28 rounded-xl text-center justify-center">{h}</li>
                        )}
                </ul>
            </div>
        </div>
    )
}

UserDetails.propTypes = {
    user: PropTypes.shape({
        username: PropTypes.string,
        email: PropTypes.string,
        age: PropTypes.number,
        hobbies: PropTypes.arrayOf(PropTypes.string)
    })
}