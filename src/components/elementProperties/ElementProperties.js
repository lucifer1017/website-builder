import React from 'react'
import TextProperties from './TextProperties'
import ImageProperties from './ImageProperties'
import VideoProperties from './VideoProperties'
import { useSelector } from 'react-redux'


const ElementProperties = () => {
    const pages = useSelector((store) => store?.page?.pages);
    const currentPageId = useSelector((store) => store?.page?.currentPageId);
    const currentPage = pages.find((page) => page.id === currentPageId);
    const currentSelectedElement = currentPage.elements.find((element) => element.id === currentPage.currentElementId);

    return (
        <div className='fixed top-16 left-[4.8%] z-10 w-full h-12 bg-white'>
            {currentSelectedElement?.type === 'text' && <TextProperties {...currentSelectedElement} />}
            {currentSelectedElement?.type === 'image' && <ImageProperties {...currentSelectedElement} />}
            {currentSelectedElement?.type === 'video' && <VideoProperties {...currentSelectedElement} />}



        </div>


    )
}

export default ElementProperties