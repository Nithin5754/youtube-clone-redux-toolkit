
import { createSlice } from "@reduxjs/toolkit";




const navBtnSlice=createSlice({
  name:'navButton',
  initialState:{
    buttonStore:["All","News","Gaming","Nature","film","song","Hollywood","Politics","cars","Bikes","FootBall","circket","weather","crime","comedy","entertainment","animals","birds"]
  },
  reducers:{}

})




export default navBtnSlice.reducer
