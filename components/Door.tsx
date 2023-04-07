import { useEffect, useState } from 'react';
import styles from '../styles/Door.module.css'
import Gift from './gift';
const Door = (props:any) => {
    const [number, setNumber]= useState(props.number)
    const [selected, setSelected]= useState(props.selected)
    const [hasGift, setHasGift]= useState(props.hasGift)
    const [opened, setOpened]= useState(props.opened)
    const select = selected ? styles.selected : '';
    console.log(props)
    useEffect(() => setSelected(props.selected),[props.selected])
    return (
        <div style={{display:'inline-block'}}>  
            {!opened ?  
                <div className={styles.area} onClick={e => props.changeSelected(number)} style={{cursor:'pointer'}}>
                    <div className={`${styles.frame} ${select}`}>
                        <div className={styles.door}>
                            <div className={styles.number}>{number}</div>
                            <div className={styles.handle} onClick={e => setOpened(true)}></div>
                        </div>
                    </div>
                    <div className={styles.floor}></div>
                </div>
                : 
                <div className={styles.area}>
                    <div className={`${styles.frame} ${select}`}>
                        <div className={styles.door}>
                        {hasGift && <Gift/>}
                            <div className={styles.number} style={{fontSize:'37px', alignItems:'center', justifyContent:'center', textAlign:'center'}}>🐐</div>
                        </div>
                    </div>
                    <div className={styles.floor}></div>
                </div>
            }
        </div>
    )
}

export default Door;