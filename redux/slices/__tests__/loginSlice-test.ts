import loginReducer, { actions } from '../loginSlice'

test('login initial state', () => {
  const state = loginReducer(undefined, { type: 'unknown' })
  expect(state.isLoggedIn).toEqual(false)
  expect(state.isLoggingIn).toEqual(false)
  expect(state.loginError).toBeUndefined()
  expect(state.userModel == undefined).toBe(true)
})


test('login in progress', () => {
  const initialState = loginReducer(undefined, { type: 'unknown' })
  const state = loginReducer(initialState, { type: actions.login.pending.type, })
  expect(state.isLoggedIn).toEqual(false)
  expect(state.isLoggingIn).toEqual(true)
  expect(state.loginError).toBeUndefined()
  expect(state.userModel == undefined).toBe(true)
})



test('login success', () => {
  const initialState = loginReducer(undefined, { type: 'unknown' })
  const state = loginReducer(initialState, { type: actions.login.fulfilled.type, payload: { success: true, data: { username: 'logined_user', accessToken: 'test1234' } } })
  expect(state.isLoggedIn).toEqual(true)
  expect(state.isLoggingIn).toEqual(false)
  expect(state.loginError).toBeUndefined()
  expect(state.userModel == undefined).toBe(false)
})




test('login fail', () => {
  const initialState = loginReducer(undefined, { type: 'unknown' })
  const state = loginReducer(initialState, { type: actions.login.rejected.type, error: new Error('Test Error') })
  expect(state.isLoggedIn).toEqual(false)
  expect(state.isLoggingIn).toEqual(false)
  expect(state.loginError?.message).toBe('Test Error')
  expect(state.userModel == undefined).toBe(true)
})