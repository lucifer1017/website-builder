
import React, { useState } from 'react'
import textcolor from '../../assets/textcolor.svg'
import boldimg from '../../assets/bold.svg'
import italicsimg from '../../assets/italics.svg'
import underlineimg from '../../assets/underline.svg'
import strikeoutimg from '../../assets/strikeout.svg'
import deleteImg from '../../assets/delete.png'
import { useDispatch } from 'react-redux'
import { removeFromElements, setCurrentElementId, updateElementProperty } from '../../utils/slices/pageSlice'
const colorPalette = [
    '#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#0000FF', '#800080', '#FF00FF',
    '#FFA500', '#FFC0CB', '#90EE90', '#ADD8E6', '#DDA0DD', '#FFA07A',
];
const availableFonts = [
    'Arial', 'Helvetica', 'Times New Roman', 'Georgia', 'Verdana',
];

const TextProperties = (props) => {

    const { id, fontFamily, fontSize, fontColor, bold, italics, underline, strikeout } = props;

    const dispatch = useDispatch();
    const [showColorPicker, setShowColorPicker] = useState(false);
    const [showFontDropdown, setShowFontDropdown] = useState(false);
    const handleRemoveElement = (input) => {
        dispatch(setCurrentElementId(null))
        dispatch(removeFromElements(input));
    }
    const toggleChange = (elementId, property, value) => {
        dispatch(updateElementProperty({ elementId, property, value }));

    }
    const handleColorChange = (color) => {
        dispatch(updateElementProperty({ elementId: id, property: 'fontColor', value: color }));
        setShowColorPicker(false);
    };
    const handleFontFamilyChange = (font) => {
        dispatch(updateElementProperty({ elementId: id, property: 'fontFamily', value: font }));
        setShowFontDropdown(false);
    };

    return (

        <div className='flex'>

            <ul className='flex mt-2 ml-3 space-x-2'>
                <li>
                    <button className='flex border border-gray-200 rounded-md justify-between' onClick={() => setShowFontDropdown(!showFontDropdown)}>
                        <div className='mx-2 p-1'>
                            <p>{fontFamily.toUpperCase()}</p>
                        </div>
                        <div className='mx-2 p-1'>
                            <p>{showFontDropdown ? '⬆️' : '⬇️'}</p>
                        </div>
                    </button>
                    {showFontDropdown && (
                        <div className="absolute bg-white border rounded p-2 shadow-md">
                            {availableFonts.map((font) => (
                                <div key={font} className="cursor-pointer hover:bg-gray-200 p-1" onClick={() => handleFontFamilyChange(font)}>
                                    {font}
                                </div>
                            ))}
                        </div>
                    )}
                </li>
                <li className='mb-1'>
                    <div className='flex border border-gray-200 rounded-md mx-2 p-[1.5px]'>
                        <button
                            onClick={() => toggleChange(id, 'fontSize', parseFloat(fontSize) - 1)}
                            className='font-bold mx-3 flex pr-1'><p className='text-lg'>-</p><div className="border-l-[1px] ml-2  border-gray-300 h-7"></div>  </button>
                        <p className='mx-1'> {parseFloat(fontSize)} </p>
                        <button
                            onClick={() => toggleChange(id, 'fontSize', parseFloat(fontSize) + 1)}
                            className='font-bold mx-3 flex'> <div className="border-l-[1px] mr-2  border-gray-300 h-7"></div> <p>+</p></button>
                    </div>
                </li>
                <div className="border-l-[1px] mx-2 border-gray-300 h-8"></div>
                <li>
                    <button
                        className='flex-row mx-2 p-1'
                        onClick={() => setShowColorPicker(!showColorPicker)}
                    >
                        <img src={textcolor} alt='textcolor' />
                        <span className="block w-full h-2 rounded-md bg-gradient-to-r from-red-500 via-yellow-300 via-blue-500 to-violet-500 -mt-1"></span>
                    </button>
                    {showColorPicker && (
                        <div className="flex absolute bg-white border rounded p-2 shadow-md">
                            {colorPalette.map((color, index) => (
                                <div
                                    key={index}
                                    className="w-6 h-6 rounded-full cursor-pointer"
                                    style={{ backgroundColor: color }}
                                    onClick={() => handleColorChange(color)}
                                />
                            ))}
                        </div>
                    )}
                </li>
                <li className={`${bold ? 'border border-gray-200 rounded-md bg-gray-300 mb-1 ' : ''}`}>
                    <button
                        onClick={() => toggleChange(id, 'bold', !bold)}
                        className=' p-1'>
                        <img src={boldimg} alt='bold' />

                    </button>
                </li>
                <li className={`${italics ? 'border border-gray-200 rounded-md bg-gray-300 mb-1 ' : ''}`}>
                    <button
                        onClick={() => toggleChange(id, 'italics', !italics)}
                        className=' p-1'>
                        <img src={italicsimg} alt='italics' />

                    </button>
                </li>
                <li className={`${underline ? 'border border-gray-200 rounded-md bg-gray-300 mb-1 ' : ''}`}>
                    <button
                        onClick={() => toggleChange(id, 'underline', !underline)}
                        className=' p-1'>
                        <img src={underlineimg} alt='underline' />

                    </button>
                </li>
                <li className={`${strikeout ? 'line-through border border-gray-200 rounded-md bg-gray-300 mb-1 ' : ''}`}>
                    <button
                        onClick={() => toggleChange(id, 'strikeout', !strikeout)}
                        className=' p-1'>
                        <img src={strikeoutimg} alt='strikeout' />

                    </button>
                </li>
                <li>
                    <button
                        onClick={() => handleRemoveElement(id)}
                        className=' p-1'>
                        <img className='w-[24px] h-[24px]' src={deleteImg} alt='delete' />

                    </button>
                </li>

            </ul>



        </div>
    )
}

export default TextProperties





