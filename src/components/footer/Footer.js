
import { useDispatch, useSelector } from 'react-redux'
import { v4 as uniqueId } from 'uuid';
import { addPage, deletePage, setCurrentPage, setShowIndex } from '../../utils/slices/pageSlice';
import MiniWebpage from './MiniWebpage';
import { useState } from 'react';
import deleteImg from '../../assets/delete.png'

const Footer = () => {
    const pages = useSelector((store) => store?.page?.pages);
    const currentPageId = useSelector((store) => store?.page?.currentPageId);
    const showIndex = useSelector((store) => store?.page?.showIndex);

    const [showFooter, setShowFooter] = useState(0);

    const dispatch = useDispatch();

    const handlePageAdd = () => {
        const newPage = {
            id: uniqueId(),
            elements: [],
        };

        dispatch(addPage(newPage));
        dispatch(setCurrentPage(newPage.id));
        if (!showIndex)
            dispatch(setShowIndex(!showIndex));

    };
    const handleOnClick = (id) => {
        dispatch(setCurrentPage(id));
        if (!showIndex)
            dispatch(setShowIndex(!showIndex));

    }
    const handlePageDelete = (id) => {
        dispatch(deletePage(id));
    }
    const handleFooterToggle = () => {
        setShowFooter(!showFooter);
    }

    return (
        <div>
            {showFooter ?
                (

                    <div className=' bottom-0 left-[4.8%] right-0 h-[130px]  bg-white z-10 fixed '>
                        <button className='w-full'
                            onClick={handleFooterToggle}>⬇️</button>
                        <ul className='ml-3 my-auto  flex '>

                            {pages?.map((page) => {
                                return (
                                    <li className='mx-[10px] flex flex-col' key={page.id}>
                                        <button className={` w-[100px] h-[70px] bg-white border ${page.id === currentPageId ? 'border-2 border-purple-600' : 'border-gray-300'
                                            } shadow-lg rounded-lg hover:border-2 hover:border-purple-600`}
                                            onClick={() => handleOnClick(page.id)}>
                                            <MiniWebpage id={page.id} elements={page.elements} />
                                        </button>
                                        <button className='mt-1 ml-[40px]'
                                            onClick={() => handlePageDelete(page.id)}><img className='w-4 h-4' src={deleteImg} alt='delete' /></button>
                                    </li>
                                )
                            })}
                            <li className='mx-[10px]' >
                                <button className=' w-[100px] h-[70px] bg-white border border-gray-300 shadow-lg rounded-lg hover:border-2 hover:border-purple-600'
                                    onClick={handlePageAdd}>
                                    <span className='p-2 m-2 font-neucha text-4xl'>+</span>
                                </button>
                            </li>

                        </ul>

                    </div>) :
                (
                    <div className='bottom-0 left-[4.8%] h-10 right-0 z-10 fixed bg-white text-center'>
                        <button className='mt-1' onClick={handleFooterToggle}>⬆️</button>
                    </div>
                )}

        </div>

    )
}

export default Footer