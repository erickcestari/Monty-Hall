import Door from "@/components/Door";
import Gift from "@/components/gift";
import { useEffect, useState } from "react";
import { Cont } from "@/components/Contador";
import styles from '@/styles/count.module.css'
export default function Home() {
  const [doorSelected, setDoorSelected] = useState(0)
  const [menu, setMenu] = useState('menu')
  const [numberDoors, setNumberDoors] = useState(3)
  const [doorGift, setDoorGift] = useState(2)
  const [doors, setdoors] = useState<number[]>([])
  
  const changeSelected = (id:number) => {
    setDoorSelected(id)
  }
  const fillDoors = () => {
    let newList = []
    for (let i = 0; i < numberDoors; i++) {
      newList.push(i)
    }
    setdoors(newList)
  }
  useEffect(() => fillDoors(),[menu])

  return (
    <div style={{display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column', minHeight:'100vh', textAlign:'center'}}>
      {menu === 'game' ? 
      <div style={{display:'inline', maxWidth:'1200px'}}>
        {doors.map((door, i) => {
          return doorGift === i + 1 ? <Door style={{display:'inline'}} key={i} number={i + 1} selected={doorSelected === i + 1} changeSelected={changeSelected}  hasGift/>:<Door key={i} number={i + 1} selected={doorSelected === i + 1} changeSelected={changeSelected}/>
        })}
        
      </div>
      :
      <div >
        <h1 style={{marginBottom:'20px', fontSize:'45px'}}>Monty Hall</h1>
        <div style={{display:'flex'}}>
          
          <Cont count={numberDoors} setNumberDoors ={setNumberDoors} name='Doors'/>
          <Cont count={doorGift} setNumberDoors ={setDoorGift} name='Gift'/>
        
      </div>
      <button className={styles.button} onClick={e => setMenu('game')}>Iniciar</button>
      </div>
      }
    </div>
  )
}
