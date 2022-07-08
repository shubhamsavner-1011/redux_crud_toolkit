import { createSlice,createAsyncThunk, isRejected } from '@reduxjs/toolkit'
import axios from 'axios'
const initialValue = {
    loading:false,
    post: [],
    error:null
}


export const getPost = createAsyncThunk('post/getPosts',
async()=>{
return fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then((res) =>console.log(res.json,'json'))}
)


export const counterSlice = createSlice({
  name: 'post',
  initialState:initialValue,
  reducers: {
    [getPost.pending]:(state,action)=>{
        state.loading = true
    }
  },
  [getPost.fulfilled]:(state,action)=>{
    state.loading = false;
    state.post = [action.payload];
  },
  [getPost.rejected]:(state, action)=>{
    state.loading = false;
    state.error = action.payload
  }
})



export default counterSlice.reducer