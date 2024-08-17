
import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { v4 as uniqueId } from 'uuid';
import { addVideo } from '../../utils/slices/videoSlice';
import { addToElements, setCurrentElementId } from '../../utils/slices/pageSlice';
const VideoElementBar = () => {
    const dispatch = useDispatch();
    const loadedVideos = useSelector((store) => store?.video?.loadedVideos);
    const [takeInput, setTakeInput] = useState(0);
    const textRef = useRef(null);
    const handleSubmit = () => {
        if (!textRef.current.value) {
            setTakeInput(!takeInput);
            return;
        }
        const newVid = {
            id: uniqueId(),
            src: textRef.current.value,

        }
        dispatch(addVideo(newVid));

        setTakeInput(!takeInput);
        textRef.current.value = '';
    }
    const handleAddNewVideo = () => {

        setTakeInput(!takeInput);

    }
    const handleAddToElements = (input) => {

        const newVidObj = {
            id: uniqueId(),
            type: 'video',
            src: input,
            width: '90px',
            height: '90px',
        }

        dispatch(addToElements(newVidObj));
        dispatch(setCurrentElementId(newVidObj.id));


    }

    return (
        <div className='fixed z-15 top-40'>
            <div className='text-center'>
                <button
                    onClick={handleAddNewVideo}
                    className='text-center w-[52%] p-4 mx-auto mt-4 mb-8 bg-purple-500 flex rounded-md hover:bg-purple-700'>

                    <p className='text-white font-semibold ml-1'>Add Videos</p>
                </button>
                {takeInput ?
                    (<div className='flex flex-col'>
                        <input className='p-1 mx-auto text-center placeholder-black' type='text' ref={textRef} placeholder='Enter Video Source' />
                        <button
                            onClick={handleSubmit}
                            className='w-[30%] p-1 my-2 mx-auto border border-gray-200 rounded-md hover:text-white bg-gray-600'>Submit</button>
                    </div>) : <></>}


            </div>

            <div className='w-[240px] flex flex-wrap'>
                {loadedVideos.length ? loadedVideos?.map((video) => (
                    <div key={video.id} className='flex flex-col ml-1'>

                        <button
                            onClick={() => handleAddToElements(video.src)}
                            className='w-[80px] h-[70px] border m-1  relative  border-gray-300'>
                            <video className='w-full h-full' autoPlay loop muted src={video.src}></video>


                        </button>

                    </div>
                )) : <></>}




            </div>
        </div>
    )
}

export default VideoElementBar