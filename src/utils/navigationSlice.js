

import { createSlice } from "@reduxjs/toolkit";


const navigationSlice=createSlice({
  name:'navigation',
  initialState:{
    hamburger:false
  },
  reducers:{
    toggleHamburger:(state,action)=>{
       state.hamburger=!state.hamburger
    }
  }
})



export const {toggleHamburger}=navigationSlice.actions


export default navigationSlice.reducer