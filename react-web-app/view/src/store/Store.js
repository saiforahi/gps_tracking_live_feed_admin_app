import { configureStore } from '@reduxjs/toolkit'
import DevicesSlice from './slices/DevicesSlice'
import SidebarSlice from './slices/SideBarSlice'
import UserSlice from './slices/UserSlice'

export default configureStore({
  reducer: {
    sidebar: SidebarSlice,
    user: UserSlice,
    devices:DevicesSlice
  },
})