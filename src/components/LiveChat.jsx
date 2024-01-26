
import { useEffect } from "react";
import { ChatMessage } from "./index";
import { useDispatch, useSelector } from "react-redux";
import { addMessages } from "../utils/LiveChat";

import { generateRandomName,generateRandomText } from "../utils/Helper";




const LiveChat = () => {
  const dispatch=useDispatch()
  const liveChats=useSelector((store)=>store.chat.message)

useEffect(()=>{
  const i=setInterval(() => {
   dispatch(addMessages({name:generateRandomName(),text:generateRandomText(20)}))
  }, 2000);
  return ()=>clearInterval(i)
},[])

  return (
    <div className="p-4 flex flex-col-reverse ">
    
    {
      liveChats.map((live,index)=>{
        return(
          <ChatMessage key={index} {...live}/>
        )
      })
    }



    </div>
  )
}
export default LiveChat