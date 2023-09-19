const slides = document.querySelector('.slides');
const slideImg = document.querySelectorAll('.slides li');
let currentIdx = 0;
const slideCount = slideImg.length;
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const slideWidth = 300;
const slideMargin = 100;
const autoSlideInterval = 2000; // 2초 간격

slides.style.width = (slideWidth + slideMargin) * slideCount + 'px';

function moveSlide(num) {
    slides.style.left = -num * (slideWidth + slideMargin) + 'px';
    currentIdx = num;
}

prev.addEventListener('click', function () {
    if (currentIdx !== 0) moveSlide(currentIdx - 1);
});

next.addEventListener('click', function () {
    if (currentIdx !== slideCount - 1) {
        moveSlide(currentIdx + 1);
    } else {
        // 끝 부분에서는 첫 번째 이미지로 순환
        moveSlide(0);
    }
});

// 자동 슬라이드 함수
function autoSlide() {
    if (currentIdx !== slideCount - 1) {
        moveSlide(currentIdx + 1);
    } else {
        moveSlide(0);
    }
}

// 2초마다 자동 슬라이드 시작
let autoSlideTimer = setInterval(autoSlide, autoSlideInterval);

// 마우스 오버 시 자동 슬라이드 멈춤
slides.addEventListener('mouseenter', function () {
    clearInterval(autoSlideTimer);
});

// 마우스 아웃 시 자동 슬라이드 재시작
slides.addEventListener('mouseleave', function () {
    autoSlideTimer = setInterval(autoSlide, autoSlideInterval);
});
