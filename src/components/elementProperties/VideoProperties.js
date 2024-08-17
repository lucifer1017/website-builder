import React, { useRef } from 'react'
import { useDispatch } from 'react-redux';
import { removeFromElements, setCurrentElementId, updateElementProperty } from '../../utils/slices/pageSlice';
import deleteImg from '../../assets/delete.png'
const VideoProperties = ({ id, type, src, width, height }) => {
    const srcRef = useRef(null);
    const dispatch = useDispatch();
    const handleSubmit = (elementId, property, value) => {
        if (!srcRef.current.value)
            return;
        dispatch(updateElementProperty({ elementId, property, value }));
        srcRef.current.value = '';

    }
    const handleRemoveElement = (input) => {
        dispatch(setCurrentElementId(null))
        dispatch(removeFromElements(input));
    }
    const toggleChange = (elementId, property, value) => {
        dispatch(updateElementProperty({ elementId, property, value }));

    }
    return (
        <div className='flex'>
            <ul className='flex space-x-2 mt-2 ml-3'>

                <li>
                    <input ref={srcRef} className='cursor-pointer p-1 text-center hover:border-2 rounded-lg hover:border-purple-400   border-1 border-gray-200' type='text' placeholder='Change Video Source' />
                </li>
                <li>
                    <button
                        onClick={() => handleSubmit(id, 'src', srcRef.current.value)}
                        className='p-1  border border-purple-500 rounded-md'>
                        Submit
                    </button>
                </li>
                <li className='mb-1'>
                    <div className='flex border border-gray-200 rounded-md mx-2 p-[1.5px]'>
                        <button
                            onClick={() => toggleChange(id, 'width', parseFloat(width) - 1)}
                            className='font-bold mx-3 flex pr-1'><p className='text-lg'>-</p><div className="border-l-[1px] ml-2  border-gray-300 h-7"></div>  </button>
                        <p className='mx-1'> Width </p>
                        <button
                            onClick={() => toggleChange(id, 'width', parseFloat(width) + 1)}
                            className='font-bold mx-3 flex'> <div className="border-l-[1px] mr-2  border-gray-300 h-7"></div> <p>+</p></button>
                    </div>
                </li>
                <li className='mb-1'>
                    <div className='flex border border-gray-200 rounded-md mx-2 p-[1.5px]'>
                        <button
                            onClick={() => toggleChange(id, 'height', parseFloat(height) - 1)}
                            className='font-bold mx-3 flex pr-1'><p className='text-lg'>-</p><div className="border-l-[1px] ml-2  border-gray-300 h-7"></div>  </button>
                        <p className='mx-1'> Height </p>
                        <button
                            onClick={() => toggleChange(id, 'height', parseFloat(height) + 1)}
                            className='font-bold mx-3 flex'> <div className="border-l-[1px] mr-2  border-gray-300 h-7"></div> <p>+</p></button>
                    </div>
                </li>
                <li>
                    <button
                        onClick={() => handleRemoveElement(id)}
                        className='p-1 m-1 '>
                        <img className='w-[18px] h-[18px]' src={deleteImg} alt='delete' />
                    </button>
                </li>

            </ul>
        </div>
    )
}

export default VideoProperties