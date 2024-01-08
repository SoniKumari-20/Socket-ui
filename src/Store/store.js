import { configureStore } from '@reduxjs/toolkit'
import UserReducer from './Reducers/UserSlicer'
export const store = configureStore({
  reducer: {UserReducer},
})