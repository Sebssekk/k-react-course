import { PropTypes } from 'prop-types'
//import '../../styles/userEmail.css'
import styles from '../../styles/userEmail.module.css'

export const UserEmail = ({email}) => (
    <div>
        <b>Email: </b>
        <span className={styles.email}>{email}</span>
    </div>
)

UserEmail.propTypes = {
    email: PropTypes.string.isRequired
}