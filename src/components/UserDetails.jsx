import { PropTypes } from 'prop-types'
export const UserDetails = ({user}) => {
    user.age = Math.floor(Math.random()*(60-16)+16)
    return (
        <div key={user.email} className="flex flex-col py-5 bg-slate-500 shadow-md min-w-52 rounded-lg px-3">
            <h1 className="font-semibold text-center">{user.username}</h1>
            <p className="italic text-center text-xs">{user.email}</p>
            <p className="text-center">
                <span className="font-thin">Age:</span> 
                <span className={user.age < 18 ? "bg-cyan-500 rounded-md":''}> {user.age}</span></p>
            <br/>
            <div>
                <p className="text-center underline pb-2 text-xl">&#x2022; Company &#x2022;</p>
                <ul className="flex flex-col gap-1 items-center">
                    {Object.keys(user.company).map( (k) =>
                        <li key={`${user.id}-comp-${k}`}><div className='flex flex-col items-center'> <h3>Company {k}:</h3> <div className="bg-gray-600 p-1 rounded-xl text-center justify-center">{user.company[k]} </div></div></li>
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