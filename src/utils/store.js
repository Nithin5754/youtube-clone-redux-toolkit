import { configureStore } from "@reduxjs/toolkit";

import navReducer from './navigationSlice'
import navButtonReducer from "./navButtonSlice";
import searchSlice from "./searchSlice";



const appStore=configureStore({
  reducer:{
    navigation:navReducer,
    navButton:navButtonReducer,
    search:searchSlice
  }
})



export default appStore