import React from 'react'
import text from '../assets/sidetext.svg'
import sideimg from '../assets/sideImage.svg'
import sidevid from '../assets/sideVideo.svg'
import upload from '../assets/uploads.svg'
import elements from '../assets/elements.svg'
import brand from '../assets/brand.svg'
import draw from '../assets/draw.svg'
import apps from '../assets/apps.svg'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedElement, toggleIsElementBarOpen } from '../utils/slices/elementSlice'

const SideBar = () => {
    const dispatch = useDispatch();
    const isElementBarOpen = useSelector((store) => store?.element?.isElementBarOpen);
    const handleClick = (input) => {
        if (!isElementBarOpen)
            dispatch(toggleIsElementBarOpen());
        dispatch(setSelectedElement(input))

    }
    return (
        <div className='fixed top-16 left-0 z-10  h-screen bg-gray-900'>
            <ul className=' text-center px-2'>
                <li className='pt-6 text-center'>
                    <button className='flex-row '
                        onClick={() => handleClick('text')}>

                        <img src={text} alt="text"
                            className='mx-auto' />
                        <span className='text-white mx-auto text-sm  font-semibold'>Text</span>
                    </button>
                </li>
                <li className='pt-9 text-center'>
                    <button className='flex-row '
                        onClick={() => handleClick('image')}>

                        <img src={sideimg} alt="img"
                            className='mx-auto' />
                        <span className='text-white mx-auto text-sm  font-semibold'>Images</span>
                    </button>
                </li>
                <li className='pt-9 text-center'>
                    <button className='flex-row '
                        onClick={() => handleClick('video')}>

                        <img src={sidevid} alt="vid"
                            className='mx-auto' />
                        <span className='text-white mx-auto text-sm  font-semibold'>Videos</span>
                    </button>
                </li>
                <li className='pt-9 text-center'>
                    <button className='flex-row '>
                        <img src={apps} alt="apps"
                            className='mx-auto' />
                        <span className='text-white mx-auto text-sm  font-semibold'>Buttons</span>
                    </button>
                </li>
                <li className='pt-9 text-center'>
                    <button className='flex-row '>
                        <img src={upload} alt="upload"
                            className='mx-auto' />
                        <span className='text-white mx-auto text-sm  font-semibold'>Uploads</span>
                    </button>
                </li>

                <li className='pt-9 text-center'>
                    <button className='flex-row '>
                        <img src={elements} alt="elements"
                            className='mx-auto' />
                        <span className='text-white mx-auto text-sm  font-semibold'>Elements</span>
                    </button>
                </li>
                <li className='pt-9 text-center'>
                    <button className='flex-row '>
                        <img src={brand} alt="brand"
                            className='mx-auto' />
                        <span className='text-white mx-auto text-sm  font-semibold'>Brand</span>
                    </button>
                </li>
                <li className='pt-9 text-center'>
                    <button className='flex-row '>
                        <img src={draw} alt="draw"
                            className='mx-auto' />
                        <span className='text-white mx-auto text-sm  font-semibold'>Draw</span>
                    </button>
                </li>





            </ul>
        </div >
    )
}

export default SideBar