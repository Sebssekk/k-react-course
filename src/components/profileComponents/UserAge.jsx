import { PropTypes } from 'prop-types'
export const UserAge = ({age}) => (
    <div>
        <b>Age: </b>
        <span>{age}</span>
    </div>
)

UserAge.propTypes = {
    age: PropTypes.number.isRequired
}