// Video Grid...
const videos = document.querySelectorAll('.video');
function pauseAllVideos() {
    videos.forEach((video) => {
        video.pause();
    });
}//to pause all the video

function playVideoOnHover(event) {
    pauseAllVideos();
    event.currentTarget.querySelector('.video').play();
}

document.querySelectorAll('.video-wrapper').forEach((wrapper) => {
    wrapper.addEventListener('mouseover', playVideoOnHover);

    wrapper.addEventListener('mouseleave', () => {
        wrapper.querySelector('.video').pause();
    });
});



// for sliding...
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }
    const slider = document.querySelector('.slider');
    slider.style.transform = `translateX(-${currentSlide * 101.6}%)`;

    dots.forEach((dot, i) => {
        dot.classList.remove('active');
        if (i === currentSlide) {
            dot.classList.add('active');
        }
    });
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        showSlide(index);
    });
});
// in every 5 seconds...
setInterval(() => {
    showSlide(currentSlide + 1);
}, 3000);
showSlide(currentSlide);



