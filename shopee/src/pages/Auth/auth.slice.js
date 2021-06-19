import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import authApi from 'src/api/auth.api'
import LocalStorage from 'src/constants/localStorage'
import { payloadCreator } from 'src/utils/helper'

export const register = createAsyncThunk(
  'auth/register',
  payloadCreator(authApi.register)
)

const auth = createSlice({
  name: 'auth',
  initialState: {
    profile: JSON.parse(localStorage.getItem(LocalStorage.user)) || {}
  },
  extraReducers: {
    [register.fulfilled]: (state, action) => {
      state.profile = action.payload
      localStorage.setItem(LocalStorage.user, JSON.stringify(state.profile))
    }
  }
})

const { reducer } = auth
const authReducer = reducer
export default authReducer
