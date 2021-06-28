const carouselImages = document.querySelector('.carousel-img-container');
const carouselButtons = document.querySelectorAll('.carousel-btn');
const numberOfImages = document.querySelectorAll('.carousel-img-container img').length;

console.log(carouselImages);
console.log(carouselButtons);
console.log(numberOfImages);

let imageIndex = 2;
let translateX = 0;

carouselButtons.forEach(button => {
    button.addEventListener('click', event =>{
        if(event.target.id === 'previous'){
            if(imageIndex!==1){
                imageIndex--;
                translateX+=1066.660
            }
        }else{
            if(imageIndex !== numberOfImages){
                imageIndex++;
                translateX-=1066.660
            }
        }
        carouselImages.style.transform = `translateX(${translateX}px)`;
    });
});