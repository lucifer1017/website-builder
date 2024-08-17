
import React, { useRef } from 'react';
import Draggable from 'react-draggable';
import { useDispatch } from 'react-redux';
import { setCurrentElementId } from '../../../utils/slices/pageSlice'


const TextBox = (props) => {
    const { id, type, fontFamily, fontSize, fontColor, bold, italics, underline, strikeout, defaultText, position } = props;
    const dispatch = useDispatch();
    const ref = useRef(null);
    const textStyles = {
        fontFamily,
        fontSize: parseFloat(fontSize),
        color: fontColor,
        fontWeight: bold ? 'bold' : 'normal',
        fontStyle: italics ? 'italic' : 'normal',
        textDecoration: underline ? 'underline' : 'none',
    };

    const containerStyles = {
        position: 'absolute',
        left: position?.x,
        top: position?.y,
        width: 'fit-content',

        padding: '10px',
    };
    const handleOnClick = (id) => {
        dispatch(setCurrentElementId(id));
    }

    return (
        <Draggable nodeRef={ref}>
            <div
                ref={ref}
                onClick={() => handleOnClick(id)}
                className='cursor-pointer hover:border hover:border-purple-600 ml-[200px] mt-[200px] relative'

                id={id} style={containerStyles}>
                <div
                    contentEditable="true"
                    style={textStyles}
                    className={`text-center  ${strikeout ? 'line-through' : ''}`}
                >
                    {defaultText}
                </div>
            </div>
        </Draggable>
    );
};

export default TextBox;




