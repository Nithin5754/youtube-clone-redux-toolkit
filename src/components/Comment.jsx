
import { useEffect, useState } from "react"
import {YOUTUBE_API_KEY,YOUTUBE_COMMENT } from "../utils/constant"




const Comment = ({VIDEO_ID}) => {
  let [isComment,setComment]=useState([])
  const YOUTUBE_COMMENTS_URL = `${YOUTUBE_COMMENT}${YOUTUBE_API_KEY}&videoId=${VIDEO_ID}`;
  const fetchData=async()=>{
    const response=await fetch(YOUTUBE_COMMENTS_URL)
     const data=await response.json()
     console.log(data.items);
     setComment(data.items)
     console.log(data.items);

    //  .snippet.topLevelComment.snippet.textOriginal
  }

useEffect(()=>{
  fetchData()
  
},[])

  return (
    <div className="max-w-xl mx-auto">
    {
      isComment.map((item) => {
        const { authorDisplayName, authorProfileImageUrl, textOriginal, publishedAt,id } = item.snippet.topLevelComment.snippet;
  
        return (
          <div key={id} className="flex items-start space-x-4 p-4 border-b border-gray-200">
            <img className="w-10 h-10 rounded-full" src={authorProfileImageUrl} alt={authorDisplayName} />
            <div className="flex flex-col">
              <span className="font-semibold">{authorDisplayName}</span>
              <span className="text-sm text-gray-600">{new Date(publishedAt).toLocaleDateString()}</span>
              <p className="mt-2 text-gray-800">{textOriginal}</p>
            </div>
          </div>
        );
      })
    }
  </div>
  
  )
}
export default Comment