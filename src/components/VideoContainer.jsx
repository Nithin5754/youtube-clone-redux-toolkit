import { useEffect, useState } from "react"
import { YOUTUBE_API } from "../utils/constant"
import { VideoCards } from "./index";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


const VideoContainer = () => {
let [isVideo,setVideo]=useState([])
 

const fetchData=async()=>{
 try {
  const response=await fetch(YOUTUBE_API)
  let data=await response.json()
  setVideo(data.items)
  console.log(data.items);
 } catch (error) {
  console.log(error,"YOUTUBE_API");
 }
}

useEffect(()=>{
  fetchData()
},[])


  return (
<div className="flex flex-wrap gap-5 m-auto">
    {
      isVideo.map((video  ) => {
        return (
          
          <Link key={video.id} to={`/watch?v=${video.id}`}>
            <VideoCards  info={video} />
          </Link>
      
        )
      })
    }
</div>



  )
}
export default VideoContainer
