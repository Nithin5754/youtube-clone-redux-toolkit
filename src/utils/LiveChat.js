


import { createSlice } from "@reduxjs/toolkit";



const liveChatReducers=createSlice({
  name:'chat',
  initialState:{
    message:[]
  },
  reducers:{
    addMessages:(state,action)=>{
    state.message.splice(15,1)
      state.message.unshift(action.payload)
    }
  }
})



export const {addMessages}=liveChatReducers.actions
export default liveChatReducers.reducer