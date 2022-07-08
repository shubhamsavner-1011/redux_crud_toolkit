import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '../Feature/postSlice'
export const store = configureStore({
  reducer: {
    todo:todoReducer
  },
})