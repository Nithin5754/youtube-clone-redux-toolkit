import {Header,Body, MainContainer,WatchPage  } from "./components/index";
import {Routes,Route } from "react-router-dom";


function App() {
  return (
    <>
        <Routes>
             <Route path="/" element={<Body/>}>
               <Route index element={<MainContainer/>}/>
               <Route path="watch" element={<WatchPage/>}/>   
      
             </Route>
        </Routes>
    </>
  )
}

export default App
