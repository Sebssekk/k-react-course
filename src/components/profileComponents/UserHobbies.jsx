import { PropTypes } from 'prop-types'
export const UserHobbies = ({hobbies}) => (
    <div>
        <b>Hobbies: </b>
        <ul>{...hobbies}</ul>
    </div>
)

UserHobbies.propTypes = {
    hobbies: PropTypes.arrayOf(PropTypes.string)
}
