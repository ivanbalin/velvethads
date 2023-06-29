document.querySelector('.burger-menu').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.nav-list').classList.toggle('active');
    document.querySelector('.nav-list').classList.toggle('show');
});

const navLinks = document.querySelectorAll('.nav-link');
for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', function() {
        document.querySelector('.burger-menu').classList.remove('active');
        document.querySelector('.nav-list').classList.remove('active');
        document.querySelector('.nav-list').classList.remove('show');
    });
}

document.addEventListener('DOMContentLoaded', function () {
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const slider = document.querySelector('.slider');
    const slideWidth = document.querySelector('.slide').offsetWidth;
    let scrollAmount = 0;
    const maxScrollAmount = slider.scrollWidth - slider.clientWidth;

    prevBtn.addEventListener('click', function () {
        scrollAmount -= slideWidth;
        if (scrollAmount < 0) {
            scrollAmount = maxScrollAmount;
        }
        slider.scrollTo({
            top: 0,
            left: scrollAmount,
            behavior: 'smooth'
        });
    });

    nextBtn.addEventListener('click', function () {
        scrollAmount += slideWidth;
        if (scrollAmount > maxScrollAmount) {
            scrollAmount = 0;
        }
        slider.scrollTo({
            top: 0,
            left: scrollAmount,
            behavior: 'smooth'
        });
    });
});