import { useEffect, useState } from "react"
import { YOUTUBE_API } from "../utils/constant"
import { VideoCards } from "./index";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


const VideoContainer = () => {
let [isVideo,setVideo]=useState([])
 

const fetchData=async()=>{
  const response=await fetch(YOUTUBE_API)
  let data=await response.json()
  setVideo(data.items)
  console.log(data.items);
}

useEffect(()=>{
  fetchData()
},[])


  return (
<div className="flex flex-wrap">
    {
      isVideo.map((video,index) => {
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
