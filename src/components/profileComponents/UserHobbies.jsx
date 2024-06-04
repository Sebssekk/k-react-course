import { PropTypes } from 'prop-types'
export const UserHobbies = ({hobbies}) => ( 
    <>
        <b>Hobbies: </b>
        <ul>{...hobbies}</ul>
    </>
)

UserHobbies.propTypes = {
    hobbies: PropTypes.arrayOf(PropTypes.string)
}
