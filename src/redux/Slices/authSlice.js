import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    user: {},
    errorIsVisible: false,

}

export const authSlice = createSlice({
        name: 'authSlice',
        initialState,
        reducers: {
            setUser: (state, action) => {
                state.user = action.payload
            },
            setErrorVisible: (state, action) => {
                state.errorIsVisible = action.payload
            },
        },
    },
)

// Action creators are generated for each case reducer function
export const {setUser, setErrorVisible} = authSlice.actions

export default authSlice.reducer