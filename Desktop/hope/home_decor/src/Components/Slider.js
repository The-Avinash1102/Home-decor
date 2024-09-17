import React from "react";



const Slider = () => {

    document.addEventListener('DOMContentLoaded', function() {
        const carouselWrapper = document.querySelector('.carousel-wrapper');
        const items = document.querySelectorAll('.carousel-item');
        const prevButton = document.querySelector('.carousel-button.prev');
        const nextButton = document.querySelector('.carousel-button.next');
    
        let currentIndex = 0;
        let visibleItems = 4;
        const updateVisibleItems = () => {
            const width = window.innerWidth;
            if (width <= 480) {
                visibleItems = 2;
            } else if (width <= 768) {
                visibleItems = 3;
            } else {
                visibleItems = 4;
            }
        };
    
        updateVisibleItems();
        window.addEventListener('resize', updateVisibleItems);
    
        const totalItems = items.length;
        const itemWidth = items[0].offsetWidth;
    
        function updateCarousel() {
            const offset = -currentIndex * itemWidth;
            carouselWrapper.style.transform = `translateX(${offset}px)`;
        }
    
        nextButton.addEventListener('click', function() {
            if (currentIndex < totalItems - visibleItems) {
                currentIndex++;
                updateCarousel();
            }
        });
    
        prevButton.addEventListener('click', function() {
            if (currentIndex > 0) {
                currentIndex--;
                updateCarousel();
            }
        });
    
        updateCarousel();
    });
    
    

    return(
        <div class="carousel-container">
    <div class="carousel">
        <div class="carousel-wrapper">
            <div class="carousel-item"><img src="image1.jpg" alt="Image 1" /></div>
            <div class="carousel-item"><img src="image2.jpg" alt="Image 2" /></div>
            <div class="carousel-item"><img src="image3.jpg" alt="Image 3" /></div>
            <div class="carousel-item"><img src="image4.jpg" alt="Image 4" /></div>
            <div class="carousel-item"><img src="image5.jpg" alt="Image 5" /></div>
        </div>
    </div>
        <button class="carousel-button prev">‹</button>
        <button class="carousel-button next">›</button>
    </div>
    );
};

export default Slider;