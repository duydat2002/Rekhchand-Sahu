// ===== Parallax Gallery =====
const galleryContainer = document.querySelector('.gallery');
const galleryImgs = document.querySelectorAll('.gallery__img');
const galleryBtn1 = document.querySelector('.gallery__btn.btn-1');
const galleryBtn2 = document.querySelector('.gallery__btn.btn-2');

galleryContainer.onmousemove = function(e) {
    var x = - (e.clientX-galleryContainer.clientWidth)/25,
        y = - (e.clientY-galleryContainer.clientHeight)/25;

        galleryImgs.forEach((item) => {
            const speed = item.dataset.speed;
            
            item.style.transform = `translate(${x*speed/5}px, ${y*speed}px)`;
        })
        
        galleryBtn1.style.transform = `translate(calc(-50% + ${x/5}px), ${y}px)`;
        galleryBtn2.style.transform = `translate(${x/5}px, ${y}px)`;
}
