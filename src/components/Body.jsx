import { useSelector } from "react-redux";


import {SideBar,MainContainer  } from "./index";

const Body = () => {

  const data=useSelector((store)=>store.navigation.hamburger)
  return (
    <div className="flex">
     {data&& <SideBar/>}
    <MainContainer/>
    
    </div>
  )
}
export default Body