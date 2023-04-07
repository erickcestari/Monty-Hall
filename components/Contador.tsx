
import styles from '../styles/count.module.css'

export const Cont = (props:any) => {
    return(
        <div className={styles.count}>
            <h3>{props.name}</h3>
            <h1>{props.count}</h1>
            <div className={styles.change}>
            <button className={styles.button} onClick={e => props.setNumberDoors(props.count - 1)}>-</button>
                <button className={styles.button} onClick={e => props.setNumberDoors(props.count + 1)}>+</button>
            </div>
        </div>
    )
}
