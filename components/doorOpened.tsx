import { useState } from 'react';
import styles from '../styles/Door.module.css'

const DoorOpened = (props:any) => {

    return (
        <div className={styles.area}>
            <div hidden={true}>{props.children}</div>
        </div>
    )
}

export default DoorOpened;