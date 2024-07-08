import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export interface LoginState {
  username: string,
  isLoggedIn: boolean,
  isLoggingIn: boolean
  loginError?: any
  userModel?: any
}

const initialState: LoginState = {
  username: '',
  isLoggedIn: false,
  isLoggingIn: false,
}

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

const login = createAsyncThunk(
  'login/login',
  async (request: { username: string, password: string }) => {
    await delay(500)
    if (request.username == 'vibez' && request.password == '123456') {
      return {
        success: true,
        data: {
          username: request.username,
          accessToken: 'test1234'
        }
      }
    }
    if (request.username == 'dev' && request.password == 'rockets') {
      return {
        success: true,
        data: {
          username: request.username,
          accessToken: 'abc123'
        }
      }
    }
    throw new Error('Invalid username or password')
  }
)


export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoggingIn = true
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoggingIn = false
        state.isLoggedIn = action.payload.success
        state.userModel = action.payload.data
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoggingIn = false;
        state.loginError = action.error
      })
  }
})
export default loginSlice.reducer
export const selectLoginState = (state: any) => state.login
export const selectIsLoggedIn = (state: any) => state.login.isLoggedIn
export const selectIsLoggingIn = (state: any) => state.login.isLoggingIn
export const selectUserModel = (state: any) => state.login.userModel
export const selectLoginError = (state: any) => state.login.loginError

export const actions = { login }