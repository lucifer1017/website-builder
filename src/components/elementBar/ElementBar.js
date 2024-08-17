
import React from 'react'
import leftArrow from '../../assets/leftArrow.svg'
import { useDispatch, useSelector } from 'react-redux'
import { toggleIsElementBarOpen } from '../../utils/slices/elementSlice'

import TextElementBar from './TextElementBar'
import ImageElementBar from './ImageElementBar'
import VideoElementBar from './VideoElementBar'
const ElementBar = () => {
    const { isElementBarOpen, selectedElement } = useSelector((store) => store?.element);
    const dispatch = useDispatch();
    const closeElementBar = () => {
        dispatch(toggleIsElementBarOpen());

    }
    return (
        <div>
            {isElementBarOpen ?
                (<div className='flex'>
                    <div className='fixed z-15 w-[250px] top-16 left-[4.8%] h-screen bg-gradient-to-b from-yellow-200 via-gray-500 to-purple-400'>
                        {selectedElement === 'text' && <TextElementBar />}
                        {selectedElement === 'image' && <ImageElementBar />}
                        {selectedElement === 'video' && <VideoElementBar />}

                    </div>

                    <button className='fixed z-15 my-auto top-[50%] left-[307px] '
                        onClick={closeElementBar}> <img className='w-4 h-4' src={leftArrow} alt='uparow' /> </button>


                </div>) : <></>}

        </div>
    )
}

export default ElementBar