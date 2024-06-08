import { PropTypes } from 'prop-types'
import { AdminView } from './AdminView'

export const HomePage = ({isAuthenticated}) => {
    // userType: ADMIN | COMMON | DISABLED
    const userType = "ADMIN"


    let pageContent; 
    switch (userType) {
        case "ADMIN":
            pageContent = <AdminView/>
            break
        case "COMMON":
            pageContent = <h1 className="text-blue-500 p-3 
                                        font-semibold text-center 
                                        border-blue-900 rounded-xl 
                                        border-solid border-2 w-fit">
                Welcome and nice to meet you !
            </h1>
            break
        default:
            pageContent = <h1 className="text-gray-500 p-3
                                font-semibold text-center
                                border-gray-900 rounded-xl
                                border-solid border-2 w-fit">
                Sorry your account was disabled...
            </h1>
    }

    return <div>
        <section className="flex items-center justify-center flex-col">
            <h1 className="text-2xl font-bold text-center p-5">Current Users</h1>
            {isAuthenticated ? pageContent : 
                <h1 className="text-red-500 p-3 
                                font-semibold text-center 
                                border-red-900 rounded-xl 
                                border-solid border-2 w-fit">
                    !! You must be logged in to see list of users !!
                </h1>}
        </section>
    </div>
}

HomePage.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
}