// 스크롤로 해당 섹션으로 이동할 수 있도록 하는 smooth scroll 기능
document.querySelectorAll('.sidebar ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

//greaticker Section
//let currentIndex = 0;
//let images = document.querySelectorAll('.carousel img');
//let imageCount = images.length;
//let autoSlideInterval;
//
//const imageWidth = images[0].clientWidth; // 이미지 너비
//
//function updateCarousel() {
//    images.forEach((img, i) => {
//        // 이미지들끼리 붙어 있도록 이미지 너비만큼만 이동
//        img.style.transform = `translateX(${(i - currentIndex) * imageWidth}px)`;
//    });
//}
//
//function showSlide(index) {
//    currentIndex = index;
//    updateCarousel();
//}
//
//function startAutoSlide() {
//    autoSlideInterval = setInterval(() => {
//        currentIndex = (currentIndex + 1) % imageCount;
//        showSlide(currentIndex);
//    }, 2000); // 2초마다 슬라이드
//}
//
//function stopAutoSlide() {
//    clearInterval(autoSlideInterval);
//}
//
//document.querySelector('.left-arrow').addEventListener('click', () => {
//    stopAutoSlide();
//    currentIndex = (currentIndex - 1 + imageCount) % imageCount;
//    showSlide(currentIndex);
//});
//
//document.querySelector('.right-arrow').addEventListener('click', () => {
//    stopAutoSlide();
//    currentIndex = (currentIndex + 1) % imageCount;
//    showSlide(currentIndex);
//});
//
//showSlide(currentIndex);
//startAutoSlide();


