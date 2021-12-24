// ===== Parallax About Me =====
const aboutSection = document.querySelector('.about__section');
const aboutItems = document.querySelectorAll('.about__img');
const aboutContent = document.querySelector('.about__content p');
const aboutBtn = document.querySelector('.about__content .btn');


aboutSection.onmousemove = function(e) {
    var x = - (e.clientX-aboutSection.clientWidth)/25,
        y = - (e.clientY-aboutSection.clientHeight)/25;

    aboutItems.forEach((item) => {
        const speed = item.dataset.speed;
        
        item.style.transform = `translate(${x*speed/5}px, ${y*speed}px)`;
    })
    aboutContent.style.transform = `translate(${-x}px, ${-y}px)`;
    aboutBtn.style.transform = `translate(${-x}px, ${-y}px)`;
}

// ===== LOCOMOTIVE SCROLL =====
// const scroll = new LocomotiveScroll({
//     el: document.querySelector('[data-scroll-container]'),
//     smooth: true
// });

// // Line
// scroll.on('scroll', () => {
    
// })
