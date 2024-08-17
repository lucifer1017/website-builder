import React from 'react'
import desktop from '../assets/desktop.svg';
import phone from '../assets/phone.svg'
import { useDispatch, useSelector } from 'react-redux';
import Webpage from './builder/webpage/Webpage';
import { togglemobileView, togglePreview } from '../utils/slices/pageSlice';
const Preview = () => {
    const pages = useSelector((store) => store?.page?.pages);
    const mobileView = useSelector((store) => store?.page?.mobileView);
    const dispatch = useDispatch();
    const handlePreview = () => {
        dispatch(togglePreview(0));
    }
    const handleMobileView = () => {
        if (!mobileView)
            dispatch(togglemobileView(!mobileView))
    }
    const handleDesktopView = () => {
        if (mobileView)
            dispatch(togglemobileView(!mobileView))
    }
    const handlePageFocus = () => {
        return;
    }
    return (
        <div className='flex flex-col overflow-y-auto max-h-screen  bg-black  opacity-90'>
            <div className='z-10 fixed flex  bg-black w-full items-center h-8 justify-between'>
                <button
                    onClick={handlePreview}
                    className='border border-gray-200 rounded-md mt-5 mx-3 py-1 px-2 bg-black text-white'>
                    Close

                </button>
                <ul className='flex mt-5 mx-8 p-1 space-x-4'>
                    <li className='mt-1'>
                        <button
                            onClick={handleDesktopView}
                            className='p-1 bg-gray-200 rounded-md border border-gray-200'>
                            <img className='w-8 h-8 ' src={desktop} alt='desktop' />
                        </button>
                    </li>
                    <li className='mt-1'>
                        <button
                            onClick={handleMobileView}
                            className='p-1 bg-gray-200 rounded-md border border-gray-200'>
                            <img className='w-8 h-8' src={phone} alt='phone' />
                        </button>
                    </li>
                </ul>

            </div>
            {mobileView ? (

                <div className="flex z-5 flex-col my-[100px] items-center justify-center h-full bg-black">

                    {pages?.map((item, index) => (
                        <div key={item.id} className="w-full max-w-sm ">
                            <Webpage key={item.id} id={item.id} elements={item.elements} onFocus={handlePageFocus} />
                        </div>
                    ))}
                </div>

            ) : (
                <div className='overflow-y-visible z-5 mb-[100px] mt-[100px]  '>

                    {pages?.map((item, index) => <Webpage key={item.id} id={item.id} elements={item.elements} onFocus={handlePageFocus} />)}
                </div>
            )


            }

            <div className='z-10 fixed flex bottom-0 left-0  bg-black w-full h-[100px] '>


            </div>

        </div>
    )
}

export default Preview