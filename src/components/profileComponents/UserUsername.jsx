export const UserUsername = (props) => {
    
    const {username} = props

    return <div>
        <b>Username: </b><span>{
            "\\../" + username.toUpperCase() + "\\../"
        }</span>
    </div>
}