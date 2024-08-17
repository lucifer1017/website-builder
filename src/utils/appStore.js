import { configureStore } from "@reduxjs/toolkit";
import pageReducer from './slices/pageSlice'
import elementReducer from './slices/elementSlice'
import imageReducer from './slices/imageSlice'
import videoReducer from './slices/videoSlice'
import propertiesReducer from './slices/elementPropertiesSlice'
const appStore = configureStore({
    reducer: {
        page: pageReducer,
        properties: propertiesReducer,
        element: elementReducer,
        image: imageReducer,
        video: videoReducer,
    }
});

export default appStore;