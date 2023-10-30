import React, { useState } from 'react';
import { PiDotOutlineFill } from 'react-icons/pi'
import '../Component/Slider.css'

const Slider = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const goToPrevious = function () {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }
    const goToNext = function () {
        const isLastSlide = currentIndex === slides.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }
    return (
        <div className='parent'>

            <div className='slides' style={{ backgroundImage: `url(${slides[currentIndex].url})` }}>
                <div className='header'>
                    <h1>
                        {slides[currentIndex].name}
                    </h1>
                </div>
            </div>
            <div className='arrows'>
                <div className='arrowschild' onClick={goToPrevious}>
                    <span class="material-symbols-outlined">
                        navigate_before
                    </span>
                    BACK
                </div>
                <div className='circleParent'>
                    {slides.map((slide, index) => (
                        <div key={index} className='circle' onClick={() => setCurrentIndex(index)}>
                            <PiDotOutlineFill />
                        </div>

                    ))}
                </div>
                <div style={{ color: 'white' }} className='arrowschild' onClick={goToNext}>
                    NEXT
                    <span class="material-symbols-outlined">
                        navigate_next
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Slider;
