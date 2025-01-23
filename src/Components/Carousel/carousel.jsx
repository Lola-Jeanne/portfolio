import '../Carousel/carousel.styles.css';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useState } from 'react';

export const Carousel = ({ data }) => {

    const [slide, setSlide] = useState(0);

    const nextSlide = () => {
        setSlide(slide === data.length - 1 ? 0 : slide + 1);
    }

    const previousSlide = () => {
        setSlide(slide === 0 ? data.length - 1 : slide - 1);
    }


    return(
    <div className='carousel'>
        {data && data.length > 0 ? (
            data.map((item, id) => {
                return (
                <img src={item} key={id} className={slide === id ? "slide" : "slide slide-hidden"} alt="carousel d'image sur les logements"></img>); 
            })
        ) : (
        <p>Erreur: no data</p>
    )}
    
    <>
        <FaAngleLeft className='arrow arrow-left' onClick={previousSlide}/>
        <FaAngleRight className='arrow arrow-right' onClick={nextSlide}/>
        <div className='img-count'>
            {slide + 1} / {data?.length}
        </div>
    </>
    </div>
    );
};
export default Carousel;