import styles from '../styles/Presente.module.css'

const Gift = () => {
    return(
        <div className={styles.presente} style={{display:'flex', position:'absolute'}}>
            <div className={styles.tampa}></div>
            <div className={styles.corpo}></div>
            <div className={styles.laco1}></div>
            <div className={styles.laco2}></div>
        </div>
    )
}

export default Gift;