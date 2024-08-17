import React from 'react'

import Webpage from './webpage/Webpage'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentPage, setShowIndex } from '../../utils/slices/pageSlice';


const Builder = () => {
    const pages = useSelector((store) => store?.page?.pages);
    const currentPageId = useSelector((store) => store?.page?.currentPageId);
    const showIndex = useSelector((store) => store?.page?.showIndex);

    const dispatch = useDispatch();
    const handlePageFocus = (id) => {
        dispatch(setCurrentPage(id));

    }

    const handleOnClick = () => {
        if (showIndex)
            dispatch(setShowIndex(!showIndex));
    }
    return (
        <div className=''
            onClick={handleOnClick}
        >



            {showIndex ?
                <Webpage id={currentPageId} onFocus={handlePageFocus}
                    elements={pages.find((page) => page.id === currentPageId)?.elements} /> :
                pages?.map((item, index) => <Webpage key={item.id} id={item.id} elements={item.elements} onFocus={handlePageFocus} />)}

        </div>
    )
}

export default Builder
