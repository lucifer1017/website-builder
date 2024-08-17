import { createSlice } from "@reduxjs/toolkit";

const elementSlice = createSlice({
    name: 'element',
    initialState: {
        isElementBarOpen: 0,
        selectedElement: null

    },
    reducers: {
        setSelectedElement: (state, action) => {
            state.selectedElement = action.payload;
        },
        toggleIsElementBarOpen: (state) => {
            state.isElementBarOpen = !state.isElementBarOpen;
        }
    }
});

export const { toggleIsElementBarOpen, setSelectedElement } = elementSlice.actions;
export default elementSlice.reducer;