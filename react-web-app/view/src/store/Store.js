import { configureStore } from '@reduxjs/toolkit'
import SidebarSlice from './slices/SideBarSlice'
import UserSlice from './slices/UserSlice'

export default configureStore({
  reducer: {
    sidebar: SidebarSlice,
    user: UserSlice,
  },
})