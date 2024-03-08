import { useState } from 'react'

import './App.css'

function App() {
 const [color,setColor]=useState("grey")

  return (
    <>
  <div className='container' style={{ backgroundColor:color}}>
      <div className='bottom-container'>
      <button style={{backgroundColor:"red", padding:"7px", borderRadius:"6px"}} onClick={()=>{setColor("red")}}>Red</button>
      <button style={{backgroundColor:"yellow" , padding:"7px", borderRadius:"6px"}}  onClick={()=>{setColor("yellow")}}>Yellow</button>
      <button style={{backgroundColor:"green" , padding:"7px", borderRadius:"6px"}}  onClick={()=>{setColor("green")}}>Green</button>
      <button style={{backgroundColor:"white" , padding:"7px", borderRadius:"6px"}}  onClick={()=>{setColor("white")}}>White</button>
      <button onClick={()=>setColor("grey")} style={ { backgroundColor: "transparent",paddingTop:"2px",paddingBottom:"2px",paddingLeft:"20px",paddingRight:"20px", borderRadius:"6px", borderColor:"blue"}}>Reset</button>
      </div>
     </div>
 
    </>
  )
}

export default App

                             


   
