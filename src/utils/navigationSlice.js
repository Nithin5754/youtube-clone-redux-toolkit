

import { createSlice } from "@reduxjs/toolkit";


const navigationSlice=createSlice({
  name:'navigation',
  initialState:{
    hamburger:true
  },
  reducers:{
    toggleHamburger:(state,action)=>{
       state.hamburger=!state.hamburger
    },
    closeHamburger:(state)=>{
      state.hamburger=false
    }
  }
})



export const {toggleHamburger,closeHamburger}=navigationSlice.actions


export default navigationSlice.reducer