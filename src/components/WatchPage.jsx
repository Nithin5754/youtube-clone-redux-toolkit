import { useEffect, useState } from "react"

import { closeHamburger } from "../utils/navigationSlice"
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Comment,LiveChat } from "./index";
import {NlLineCommentsContainer} from "../components/nestedComments/index";
import { addMessages } from "../utils/LiveChat";
const WatchPage = () => {
const [isComment,setComment]=useState('')
  const dispatch=useDispatch()
  let [searchParams] = useSearchParams();
  const dataId=searchParams.get('v')
  useEffect(()=>{
     dispatch(closeHamburger())
  },[])

  const handleSubmitComment=()=>{
    console.log("hello")
   isComment&& dispatch(addMessages({name:'unknown',text:isComment}))
   setComment('')
  }
  return (
<div className="flex flex-col ">

<div className="flex flex-row items-center justify-center mt-20 ml-14 gap-4">
 <div className="flex-1 ">
    <iframe width="1000" height="500"  src={`https://www.youtube.com/embed/${dataId}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
 </div>

<div>
<div className="live-chat-container flex flex-col-reverse  bg-gray-00 w-[400px] h-[500px] shadow-lg rounded-lg overflow-y-scroll">
    <LiveChat/>
    </div> 
    <div className="flex gap-3 mt-5 ">

    <input 
 className="border border-gray-700 w-full px-2 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600" 
 placeholder="Post a comment" 
 type="text" 
 value={isComment} 
 onChange={(e) => setComment(e.target.value)} 
/>
<button 
 type='button' 
 className='bg-gray-700 text-white p-2 rounded-sm hover:bg-green-800 transition duration-200 ease-in-out' 
 onClick={handleSubmitComment}
>
 Add
</button>
  
    </div>
</div>


</div>




<div>
    <NlLineCommentsContainer/>
</div>


<div className="mt-40">
     <Comment VIDEO_ID={dataId}/>
</div>

</div>



  )
}
export default WatchPage