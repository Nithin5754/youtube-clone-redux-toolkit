
import { createSlice } from "@reduxjs/toolkit";



const searchSlice=createSlice({
  name:'search',
  initialState:{},
  reducers:{
    addCachedResult:(state,action)=>{
      // state=Object.assign(state,action.payload)
         state={...action.payload,...state}
    }
  }
})


export const {addCachedResult}=searchSlice.actions;
export default searchSlice.reducer