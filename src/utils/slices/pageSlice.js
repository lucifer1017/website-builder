import { createSlice } from "@reduxjs/toolkit";


const pageSlice = createSlice({
    name: 'page',
    initialState: {
        pages: [
            {
                id: 1,
                elements: [],
                currentElementId: null,

            }



        ],
        currentPageId: 1,
        showIndex: 0,
        preview: 0,
        mobileView: 0,


    },
    reducers: {

        addPage: (state, action) => {
            state.pages.push(action.payload)
        },
        deletePage: (state, action) => {
            state.pages = state.pages.filter((page) => page.id !== action.payload);
        },
        setCurrentPage: (state, action) => {
            state.currentPageId = action.payload;
        },
        setShowIndex: (state, action) => {
            state.showIndex = action.payload;
        },
        addToElements: (state, action) => {
            const currentPageIndex = state.pages.findIndex(
                (page) => page.id === state.currentPageId
            );
            if (currentPageIndex !== -1) {
                state.pages[currentPageIndex].elements.push(action.payload);
            } else {
                console.error("Cannot add element to a page that does not exist!");
            }
        },
        removeFromElements: (state, action) => {
            const currentPageIndex = state.pages.findIndex(
                (page) => page.id === state.currentPageId
            );
            if (currentPageIndex !== -1) {

                state.pages[currentPageIndex].elements = state.pages[currentPageIndex].elements.filter(
                    (element) => element.id !== action.payload
                );
            } else {
                console.error("Cannot remove element from a page that does not exist!");
            }

        },
        togglePreview: (state, action) => {
            state.preview = action.payload;
        },
        togglemobileView: (state, action) => {
            state.mobileView = action.payload;
        },
        setCurrentElementId: (state, action) => {
            const currentPageIndex = state.pages.findIndex((page) => page.id === state.currentPageId);
            if (currentPageIndex !== -1) {
                state.pages[currentPageIndex].currentElementId = action.payload;
            } else {
                console.error("Cannot set current element for a non-existent page!");
            }
        },
        updateElementProperty: (state, action) => {

            const { elementId, property, value } = action.payload;

            const currentPage = state.pages.find(page => page.id === state.currentPageId);
            const elementIndex = currentPage.elements.findIndex(element => element.id === elementId);
            if (elementIndex !== -1) {
                currentPage.elements[elementIndex][property] = value;
            } else {
                console.error("Element with ID", elementId, "not found on current page!");
            }
        },



    }
});

export const { addPage, deletePage, setCurrentPage, setShowIndex, togglemobileView, addToElements, togglePreview, removeFromElements, setCurrentElementId, getCurrentElement, updateElementProperty } = pageSlice.actions;
export default pageSlice.reducer;