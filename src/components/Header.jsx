import {FaHamburger ,FaYoutube,FaUserCircle ,FaSearch } from "react-icons/fa";

import { toggleHamburger } from "../utils/navigationSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { YOUTUBE_API_SEARCH,YOUTUBE_SEARCH_URL,YOUTUBE_API_KEY} from "../utils/constant";
import { addCachedResult } from "../utils/searchSlice";
import { addSearchList } from "../utils/searchListSlice";
import { Link } from "react-router-dom";




// const YOUTUBE_SEARCH_URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${encodeURIComponent(SEARCH_TERM)}&key=${YOUTUBE_API_KEY}`;


const Header = () => {
  const [searchQuery,setSearchQuery]=useState('')
  const [searchSuggestion,setSearchSuggestion]=useState([])


  //getting the search items from youtube search api list
  // const [isSearchList,setSearchList]=useState([])

 const [SuggestionShow,setSuggestionShow]=useState(false)
  const dispatch=useDispatch()
  const searchCache=useSelector((store)=>store.search)

useEffect(()=>{
const timer=setTimeout(() => {

  if(searchCache[searchQuery]){
 
    setSearchSuggestion(searchCache[searchQuery])
  }else{

    searchQueryHandle() 

  }
},200);

return ()=>clearTimeout(timer)

},[searchQuery])


const handleSubmit=()=>{
  getSearchList()
}



const getSearchList=async()=>{
 try {
  const response=await fetch(YOUTUBE_SEARCH_URL+encodeURIComponent(searchQuery)+"&key="+YOUTUBE_API_KEY);
  const data=await response.json();
  // console.log(data?.items?.[0]?.snippet,"hey one word");
  console.log(data);
dispatch(addSearchList(data?.items))
 } catch (error) {
  console.log(error,"searclist list items");
 }
}


const searchQueryHandle=async ()=>{
  const response=await fetch(YOUTUBE_API_SEARCH+searchQuery)
  const data=await response.json()

  setSearchSuggestion(data[1])
  dispatch(addCachedResult(
    {
      [searchQuery]:data[1]
    }
  ))

}



  return (
    <div className="grid grid-flow-col h-14 shadow-xl">

    <div className="ihamburger  flex gap-4  col-span-1 m-auto text-red-900 text-4xl">
      <FaHamburger onClick={()=>dispatch(toggleHamburger())}/> 
      <FaYoutube/>
    </div>
    <div className="search col-span-10 m-auto  ">
     <div className="flex">
     <input type="text" placeholder="search videos..." className="w-96 bg-gray-50 p-2 rounded-l-full "
       value={searchQuery}
       onChange={(e)=>setSearchQuery(e.target.value)}
       onFocus={()=>setSuggestionShow(true)}
       onBlur={()=>setSuggestionShow(false)}
       />
       <p  className="bg-gray-400 text-white  hover:bg-blue-600 p-2 text-lg rounded-r-full">
        <Link to={'/itemList'}>
        <button onClick={handleSubmit} >
       <FaSearch/>
        </button>
        </Link>
        </p>
     </div>
   {
    SuggestionShow&&searchSuggestion.length>0&&(
      <div className="absolute z-50 bg-white p-1 w-[24rem] rounded-md mt-3">
      <ul>
  {
 searchSuggestion.map((suggestion)=>{
   return(
     <li key={suggestion} className="flex gap-2 hover:bg-gray-100 p-2"><span className="text-sm"><FaSearch/></span>{suggestion}</li>
   )
   })
  }
      </ul>
    </div>
    )
   }
    </div> 
    <div className="userIcon col-span-1 m-auto  text-red-900 text-4xl">
      <FaUserCircle/>
    </div>
    </div>
  )
}
export default Header