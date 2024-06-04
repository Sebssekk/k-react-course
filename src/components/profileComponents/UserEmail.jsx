import { PropTypes } from 'prop-types'
export const UserEmail = ({email}) => (
    <div>
        <b>Email: </b>
        <span>{email}</span>
    </div>
)

UserEmail.propTypes = {
    email: PropTypes.string.isRequired
}