import { PropTypes } from 'prop-types'
export const UserUsername = (props) => {
    
    const {username} = props
    
    const usernameStyle = {
        color: "blue",
        fontWeight: "bold",
        fontStyle: "italic"
    }

    return <div>
        <b>Username: </b><span style={usernameStyle}>{
            "\\../" + username.toUpperCase() + "\\../"
        }</span>
    </div>
}

UserUsername.propTypes = {
    username: PropTypes.string.isRequired
}