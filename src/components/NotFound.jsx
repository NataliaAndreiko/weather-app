import ErrorNotFound from "../assets/images/not_found.svg"
import styles from "../styles/not_found.module.scss"

const NotFound = () => {
    return (
        <div className={styles.not_found}>
            <img src={ErrorNotFound}/>
            <p className={styles.error_text}>Oops! Invalid location</p>
        </div>
    )
}

export default NotFound;