
import React, { useRef } from 'react'
import Draggable from 'react-draggable';
import { useDispatch } from 'react-redux';
import { setCurrentElementId } from '../../../utils/slices/pageSlice';

const ImageBox = (props) => {
    const { id, type, src, width, height } = props;
    const ref = useRef(null);
    const dispatch = useDispatch();
    const handleOnClick = (id) => {
        dispatch(setCurrentElementId(id));
    }

    return (
        <Draggable nodeRef={ref}>
            <div
                className={`cursor-pointer w-[${width}] h-[${height}] relative`}
                onClick={() => handleOnClick(id)}
                ref={ref} >
                <img className='w-[50%] h-[50%]' src={src} alt='elementImg' />
            </div>
        </Draggable>
    )
}

export default ImageBox