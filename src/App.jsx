import { UserProfile } from "./components/UserProfile"

import styles from "./styles/userProfile.module.sass"

export const App = () => {
    return (  
    <>
        <h1 className={styles.card}>
            Root Component says:
            Hello World!
        </h1>
        <UserProfile/>
    </>
    )
}