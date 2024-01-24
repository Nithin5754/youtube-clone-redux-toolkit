import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";


import {SideBar,Header } from "./index";


const Body = () => {

  const data=useSelector((store)=>store.navigation.hamburger)
  return (
 <>
   <Header/>
    <div className="flex ">

     {data&& <SideBar/>}
   
     <Outlet/>
    </div>
 </>
  )
}
export default Body