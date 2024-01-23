import {FaHamburger ,FaYoutube,FaUserCircle ,FaSearch } from "react-icons/fa";

import { toggleHamburger } from "../utils/navigationSlice";
import { useDispatch } from "react-redux";

const Header = () => {
  const dispatch=useDispatch()
  return (
    <div className="grid grid-flow-col h-14 shadow-xl   ">

    <div className="ihamburger  flex gap-4  col-span-1 m-auto text-red-900 text-4xl">
      <FaHamburger onClick={()=>dispatch(toggleHamburger())}/> 
      <FaYoutube/>
    </div>
    <div className="search col-span-10 m-auto flex ">
       <input type="text" placeholder="search videos..." className="w-96 bg-gray-200 p-2 rounded-l-full "/>
       <p className="bg-gray-400 text-white  hover:bg-blue-600 p-2 text-lg rounded-r-full"><FaSearch/></p>
    </div> 
    <div className="userIcon col-span-1 m-auto  text-red-900 text-4xl">
      <FaUserCircle/>
    </div>
    </div>
  )
}
export default Header