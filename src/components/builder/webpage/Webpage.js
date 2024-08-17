import ImageBox from "./ImageBox";
import TextBox from "./TextBox";
import VideoBox from "./VideoBox";
const Webpage = ({ id, elements, onFocus }) => {


    return (

        <div

            className="flex justify-center">
            <div
                className="w-[30%] h-auto md:w-8/12 md:h-[500px] p-10 md:p-0 md:ml-32 bg-white border border-gray-300 shadow-lg rounded-lg hover:border-2 hover:border-purple-600"
                onMouseOver={() => onFocus(id)}
            >
                <div

                    className='relative p-10 md:p-0'>
                    {elements.map((element) => {
                        switch (element.type) {
                            case 'text':
                                return <TextBox key={element.id} {...element} />; // Pass all element properties
                            case 'image':
                                return <ImageBox key={element.id} {...element} />;
                            case 'video':
                                return <VideoBox key={element.id}  {...element} />;
                            default:
                                return null; // Handle unknown element types
                        }
                    })}
                </div>

            </div>
        </div>
    );
};

export default Webpage;







