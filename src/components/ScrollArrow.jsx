import react from 'react';
import {IoIosArrowDown} from 'react-icons/io';

function ScrollArrow(){
    return(
        <div className="absolute bottom-15 left-1/2 -translate-x-1/2">
      <IoIosArrowDown className="text-white text-5xl animate-bounce" />

    </div>
    )
}

export default ScrollArrow