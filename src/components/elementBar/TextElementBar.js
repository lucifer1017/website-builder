import React from 'react'
import text from '../../assets/sidetext.svg'
import { useDispatch, useSelector } from 'react-redux'
import { addToElements, setCurrentElementId } from '../../utils/slices/pageSlice';
import { v4 as uniqueId } from 'uuid';


const TextElementBar = () => {
    const dispatch = useDispatch();
    const elementProperties = useSelector((store) => store?.properties?.elementProperties);
    const handleInsertion = (input) => {

        const desiredElementProperties = elementProperties[input];


        const newTextObj = {
            id: uniqueId(),
            type: 'text',
            ...desiredElementProperties,

        };

        dispatch(addToElements(newTextObj));
        dispatch(setCurrentElementId(newTextObj.id));


    }

    return (

        <div className='fixed z-15 top-40'>
            <div className='text-center'>
                <button
                    onClick={() => handleInsertion('textBox')}
                    className='w-[80%] p-4 m-6 bg-purple-500 flex rounded-md hover:bg-purple-700'>
                    <img src={text} alt='paragraph text' />
                    <p className='text-white font-semibold ml-1'>Add a text box</p>
                </button>

            </div>
            <div className='flex flex-col ml-[9px]'>
                <p className='text-white underline font-semibold text-xl m-2 p-2'>Defautl text styles</p>
                <button
                    onClick={() => handleInsertion('heading')}
                    className='m-3 p-2 border border-gray-200 rounded-md hover:bg-gray-600'>
                    <h1 className='text-white text-2xl font-semibold'>Add a heading</h1>
                </button>
                <button
                    onClick={() => handleInsertion('subHeading')}
                    className='m-3 p-2 border border-gray-200 rounded-md hover:bg-gray-600'>
                    <h2 className='text-white text-md font-semibold'>Add a Subheading</h2>
                </button>
                <button
                    onClick={() => handleInsertion('bodyText')}
                    className='m-3 p-2 border border-gray-200 rounded-md hover:bg-gray-600'>
                    <h4 className='text-white text-sm font-semibold'>Add body text</h4>
                </button>


            </div>
        </div>
    )
}

export default TextElementBar