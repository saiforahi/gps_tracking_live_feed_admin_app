import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import { JsonClient } from 'src/config'
const initialState = {
  current : [],
  previous:[],
  status: 'idle',
  error:''
}

export const fetchDetailsThunk = createAsyncThunk('devices/fetchDetailsThunk', async () => {
  const response = await JsonClient.get('device/data/last/')
  return response.data
})

export const devicesSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    
  },
  extraReducers: {
    [fetchDetailsThunk.pending]: (state, action) => {
      state.status = 'loading'
    },
    [fetchDetailsThunk.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      // Add any fetched posts to the array
      state.previous=state.current
      state.current = action.payload
    },
    [fetchDetailsThunk.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    }
  }
})

// Action creators are generated for each case reducer function

export default devicesSlice.reducer