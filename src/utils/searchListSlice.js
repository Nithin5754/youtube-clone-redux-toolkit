
import { createSlice } from "@reduxjs/toolkit";




const searchListSlice=createSlice({
  name:'searchList',
  initialState:{
    list:[]
  },
  reducers:{
    addSearchList:(state,action)=>{
      state.list=action.payload
    }
  }
})


export const{addSearchList}=searchListSlice.actions

export default searchListSlice.reducer