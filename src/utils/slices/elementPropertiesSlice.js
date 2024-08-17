import { createSlice } from "@reduxjs/toolkit";

const elementPropertiesSlice = createSlice({
    name: 'properties',
    initialState: {
        selectedElementType: null,


        elementProperties: {
            textBox: {
                fontFamily: 'neucha',
                fontSize: "80px",
                fontColor: 'black',
                bold: true,
                italics: false,
                underline: false,
                strikeout: false,
                defaultText: 'Add Paragraph Text',
                position: { x: 40, y: 40, z: 5 },
            },
            heading: {
                fontFamily: 'neucha',
                fontSize: "80px",
                fontColor: 'black',
                bold: true,
                italics: false,
                underline: false,
                strikeout: false,
                defaultText: 'Add Heading',
                position: { x: 40, y: 40, z: 5 },
            },
            subHeading: {
                fontFamily: 'neucha',
                fontSize: "40px",
                fontColor: 'black',
                bold: false,
                italics: false,
                underline: false,
                strikeout: false,
                defaultText: 'Add Subheading',
                position: { x: 40, y: 40, z: 5 },
            },
            bodyText: {
                fontFamily: 'neucha',
                fontSize: "20px",
                fontColor: 'black',
                bold: false,
                italics: false,
                underline: false,
                strikeout: false,
                defaultText: 'Add Body Text',
                position: { x: 40, y: 40, z: 5 },
            },
        }

    },

    reducers: {
        setSelectedElementType: (state, action) => {
            state.selectedElementType = action.payload;

        },


    }
});

export const { setSelectedElementType } = elementPropertiesSlice.actions;
export default elementPropertiesSlice.reducer;