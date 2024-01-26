import {Header,Body, MainContainer,WatchPage  } from "./components/index";
import {Routes,Route } from "react-router-dom";
import { SearchList } from "./components/index";


function App() {
  return (
    <>
        <Routes>
             <Route path="/" element={<Body/>}>
               <Route index element={<MainContainer/>}/>
               <Route path="watch" element={<WatchPage/>}/>   
               <Route path="itemList" element={<SearchList/>}/>
      
             </Route>
        </Routes>
    </>
  )
}

export default App
