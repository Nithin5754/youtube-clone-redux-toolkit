import { configureStore } from "@reduxjs/toolkit";

import navReducer from './navigationSlice'
import navButtonReducer from "./navButtonSlice";



const appStore=configureStore({
  reducer:{
    navigation:navReducer,
    navButton:navButtonReducer
  }
})



export default appStore