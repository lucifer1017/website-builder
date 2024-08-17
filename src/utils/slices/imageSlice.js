import { createSlice } from '@reduxjs/toolkit';

const imageSlice = createSlice({
    name: 'image',
    initialState: {
        loadedImages: [],
    },
    reducers: {
        addImage: (state, action) => {
            state.loadedImages.push(action.payload);
        },
        removeImage: (state, action) => {
            state.loadedImages = state.loadedImages.filter(image => image.id !== action.payload);
        },

    },
});

export const { addImage, removeImage } = imageSlice.actions;
export default imageSlice.reducer;
