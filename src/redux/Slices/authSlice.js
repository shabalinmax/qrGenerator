import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: {

    }
}

export const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { setUser, } = authSlice.actions

export default authSlice.reducer