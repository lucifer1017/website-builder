import React from 'react'
import menuBar from '../assets/menu.svg'
import undo from '../assets/undo.svg'
import redo from '../assets/redo.svg'
import saved from '../assets/saved.svg'
import preview from '../assets/preview.svg'
import publish from '../assets/publish.svg'
import share from '../assets/share.svg'
import { useDispatch } from 'react-redux'
import { togglePreview } from '../utils/slices/pageSlice'
const NavBar = () => {
    const dispatch = useDispatch();
    const handlePreview = () => {
        dispatch(togglePreview(1));
    }
    return (
        <div className='fixed top-0 left-0 right-0 z-10 w-screen h-16  bg-blue-500 bg-gradient-to-r from-blue-300 to-green-500 flex items-center'>
            <div className='flex'>
                <img className='w-8 h-8 cursor-pointer ml-4  my-auto hover:border border-transparent' src={menuBar} alt='menubar' />
                <h1 className='font-neucha cursor-pointer text-white my-auto mx-12 text-lg font-semibold scale-110 transition-transform duration-200 ease-in-out'>PSEUDO</h1>
                <div className="border-l-[1px] border-white h-10"></div>
                <img className='w-7 h-7 cursor-pointer mx-5 my-auto' src={undo} alt='undo' />
                <img className='w-7 h-7 cursor-pointer mx-5 my-auto' src={redo} alt='redo' />
                <div className="border-l-[1px] border-white h-10"></div>
                <img className='w-7 h-7 ml-5 mr-5 my-auto' src={saved} alt='saved' />


            </div>
            <div className='flex ml-20'>
                <ul className='mx-3 flex'>
                    <li className='mx-2'> <input className='p-2 placeholder-gray-600 text-sm text-center text-white  font-neucha rounded-md bg-transparent hover:border border-white'
                        type='text'
                        placeholder='Design Name' />
                    </li>
                    <li >

                        <button className='mx-2 my-auto flex rounded-md border-[0.5px] border-gray-200 items-center cursor-pointer font-neucha p-2 text-white text-sm'>

                            👑 Upgrade to PSEUDO Pro
                        </button>
                    </li>
                    <li >
                        <button
                            onClick={handlePreview}
                            className='flex mx-2  my-auto rounded-md border-[0.5px] border-gray-200 items-center hover:bg-gray-[20] '>
                            <img className='w-[25px] h-[25px] ml-1 ' src={preview} alt='saved' />
                            <h1 className='font-neucha p-2 text-white text-sm'>Preview</h1>
                        </button>
                    </li>
                    <li >
                        <button className='flex mx-2  my-auto rounded-md border-[0.5px] border-gray-200 items-center hover:bg-gray-[20] '>
                            <img className='w-[25px] h-[25px] ml-1 ' src={publish} alt='saved' />
                            <h1 className='font-neucha p-2 text-white text-sm'>Publish Website</h1>
                        </button>
                    </li>
                    <li >
                        <button className='flex mx-2  my-auto rounded-md bg-white border-[0.5px] border-gray-200 items-center hover:bg-gray-[20] '>
                            <img className='w-[25px] h-[25px] ml-1 ' src={share} alt='saved' />
                            <h1 className='font-neucha p-2 text-black text-sm'>Share</h1>
                        </button>
                    </li>
                    <li >
                        <button className='flex ml-2  my-auto rounded-md bg-white border-[0.5px] border-gray-200 items-center hover:bg-gray-[20] '>

                            <h1 className='font-neucha p-2 text-black text-sm'>Magic of AI 🎇</h1>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar