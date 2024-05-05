const burger = () => {
    const btn = document.querySelector('header header svg#burg')
    const off = document.querySelector('.offset')
    const close = document.querySelector('.offset nav svg')
    btn.addEventListener('click', () => {
        off.style.display = 'block'
    })
    close.addEventListener('click', () => {
        off.style.display = 'none'
    })
}

burger()

const crest = () => {
    const tru = document.querySelector('header div>svg')
    const row = document.querySelector('header>div')
    tru.addEventListener('click', () => {
        row.style.display = 'none'
    })
    
}

crest()

const sliderImage = document.querySelector("main section.slider div.zaebalotwo img");
const leftButton = document.querySelector("main section.slider div.tudatwo #levo");
const rightButton = document.querySelector("main section.slider div.tudatwo #pravo");
const sliderText = document.querySelector("main section.slider div.textslider span ");

let currentImageIndex = 0;
const images = ["images/slid1.jpg", "images/slid2.jpg", "images/slid3.jpg"];
const texts = ["black friday Скидки почти на все Только с 17 по 4 Успей купить подарки близким", "black friday Скидки почти на все Только с 17 по 4 Успей купить подарки близким","black friday Скидки почти на все Только с 17 по 4 Успей купить подарки близким"];

function changeImage(direction) {
    if (direction === "levo") {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    } else if (direction === "pravo") {
        currentImageIndex = (currentImageIndex + 1) % images.length;
    }

    sliderImage.src = images[currentImageIndex];
    sliderText.textContent = texts[currentImageIndex];
}

leftButton.addEventListener("click", () => changeImage("levo"));
rightButton.addEventListener("click", () => changeImage("pravo"));
