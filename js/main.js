// landing backgrounds show

let slideIndex = 2;
showSlides(slideIndex);

// Next/previous
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Bullets onclick shows its repective background
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    const slides = document.getElementsByClassName("slides");
    const dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}


//portfolio shuffle

function filter(f) {
    const divs = document.getElementsByClassName("portfo");
    if (f === 'all') {
        for (let i = 0; i < divs.length; i++){
            if (!divs[i].classList.contains('show')) divs[i].classList.add('show');
        }
    }
    if (f === 'paintings') {
        for (let i = 0; i < divs.length; i++){
            if (divs[i].classList.contains('show')) divs[i].classList.remove('show');
        }
        divs[0].classList.add('show');
    }
    if (f === 'photos') {
        for (let i = 0; i < divs.length; i++){
            if (divs[i].classList.contains('show')) divs[i].classList.remove('show');
        }
        divs[1].classList.add('show');
    }
}

// Add active class to the current button
const btnContainer = document.getElementsByClassName("shuffle");
const btns = document.getElementsByClassName("btn");
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function(){
    let current = document.getElementsByClassName("btn active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
    });
}

filter("all") // Execute the function and show all columns


// Skills Animate Width
let progressSpans = document.querySelectorAll('.prog span');
const skillsSection = document.getElementsByClassName('our-skills')[0];

window.onscroll = function () {
    if (window.scrollY >= skillsSection.offsetTop - 500) {
        progressSpans.forEach((span) => {
            span.style.width = span.dataset.progress;
        });
    }
}



//testimonials auto change

let index = 1;
showTestimonial();

function showTestimonial(){
    const testimonials = document.getElementsByClassName('testimonial-div');
    const bullets = document.getElementsByClassName('testi-bullet');
    for (let i = 0; i < testimonials.length; i++){
        testimonials[i].style.display = 'none';
    }
    for (let i = 0; i < bullets.length; i++) {
        bullets[i].className = bullets[i].className.replace(" active", "");
    }
    index++;
    if (index > testimonials.length) index = 1;
    testimonials[index - 1].style.display = 'block';
    bullets[index-1].className += " active";
    setTimeout(showTestimonial, 7000);
}

