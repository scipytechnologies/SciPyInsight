import {createSlice} from '@reduxjs/toolkit'


export const loaderSlice = createSlice({
    name: 'loader',
    initialState: {
        loading: false,
    },

    reducers: {
        setLoading: (state)=> {
            state.loading = true;
        },

        unSetLoading: (state)=> {
            state.loading = false;
        }

    }
})


export const { setLoading, unSetLoading } = loaderSlice.actions;
export default loaderSlice.reducer;