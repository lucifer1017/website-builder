import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
    name: 'video',
    initialState: {
        loadedVideos: [],

    },
    reducers: {
        addVideo: (state, action) => {
            state.loadedVideos.push(action.payload);
        },
        removeVideo: (state, action) => {
            state.loadedVideos = state.loadedVideos.filter((video) => video.id !== action.payload);
        }
    }
})
export const { addVideo, removeVideo } = videoSlice.actions;
export default videoSlice.reducer;