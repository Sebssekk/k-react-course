import { PropTypes } from 'prop-types'
export const UserAge = ({age}) => (
    <div>
        <b>Age: </b>
        <span className='font-thin 
                        text-center 
                        bg-sky-600 
                        text-fuchsia-600 
                        rounded-lg 
                        shadow-md
                        p-3'>{age}</span>
            
    </div>
)

UserAge.propTypes = {
    age: PropTypes.number.isRequired
}