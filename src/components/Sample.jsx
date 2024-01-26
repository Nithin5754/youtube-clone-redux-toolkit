import { useState,useMemo } from "react"
import { prime } from "../utils/Helper"

const Sample = () => {

  const [text,setText]=useState(0)
  const [isToggle,setToggle]=useState(false)
const handleText=useMemo(()=>prime(text),[text])
// const handleText=prime(text)

  return (
    <div className={`w-[400px] h-[600px] bg-gray-500  m-auto mt-4 rounded-lg ${isToggle&&('bg-yellow-800')}`}>

      <input type="text" className="m-4 w-76 text-black " value={text} onChange={(e)=>setText(e.target.value)}/>
      <button className="bg-green-800 text-white p-1 rounded-sm " onClick={()=>setToggle(!isToggle)} >toggle</button>
    <p>nth number: {handleText}</p>
    </div>
  )
}
export default Sample
