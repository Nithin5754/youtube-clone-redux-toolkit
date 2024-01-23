import { useEffect } from "react"
import { YOUTUBE_API } from "../utils/constant"

const VideoContainer = () => {

const fetchData=async()=>{
  const response=await fetch(YOUTUBE_API)
  let data=await response.json()
  console.log(data);
}

useEffect(()=>{
  fetchData()
},[])


  return (
    <div>VideoContainer</div>
  )
}
export default VideoContainer
