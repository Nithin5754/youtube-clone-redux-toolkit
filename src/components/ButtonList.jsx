import { Button } from "./index";

import {  useSelector } from "react-redux";

const ButtonList = () => {

  const data=useSelector((store)=>store.navButton.buttonStore)

  return (
   <div className="mt-4 ml-3 flex gap-4 overflow-hidden px-4">
    {
      data.map((btn,index)=>{
        return(
          <Button key={index} btn={btn}/>
        )
      })
    }
  
   </div>
  )
}
export default ButtonList