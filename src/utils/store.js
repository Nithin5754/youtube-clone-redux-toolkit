import { configureStore } from "@reduxjs/toolkit";

import navReducer from './navigationSlice'
import navButtonReducer from "./navButtonSlice";
import searchSlice from "./searchSlice";
import searchListSlice from "./searchListSlice";
import liveChatReducers from './LiveChat'



const appStore=configureStore({
  reducer:{
    navigation:navReducer,
    navButton:navButtonReducer,
    search:searchSlice,
    searchList:searchListSlice,
   chat:liveChatReducers
  }
})



export default appStore