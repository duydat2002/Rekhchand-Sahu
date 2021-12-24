// ===== AOS =====
AOS.init();

// ===== NAV MOBILE =====
const navMobile = document.querySelector('.nav-mobile');
const navMobileBtn = document.querySelector('.nav-mobile-btn');
const navMobileList = document.querySelectorAll('.nav-mobile-list > li');

navMobileBtn.onclick = () => {
    navMobile.classList.toggle('active');

    navMobileList.forEach((item, index) => {
        item.classList.toggle('ani-fade-up');
        item.style.animationDelay = index*0.1 + 's';
        item.style.animationDuration = '1s';
    })
}

// Close Nav Mobile
const navMobileItems = document.querySelectorAll('.nav-mobile-list > li a');

navMobileItems.forEach((item) => {
    item.onclick = () => {
        navMobile.classList.remove('active');
    }
})


// ===== CURSOR =====
const cursor = document.getElementById('cursor');
const cursorInner = document.querySelector('#cursor .cursor-inner');

window.onmousemove = (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
}

// Hide Cursor
const hideCursorEle = document.querySelectorAll('.hide-cursor');

hideCursorEle.forEach((el) => {
    el.onmouseenter = () => {
        cursor.classList.add('hide');
    }

    el.onmouseleave = () => {
        cursor.classList.remove('hide');
    }
})

// Case Study Cursor
const caseStudyCursorEle = document.querySelectorAll('.case-study-cursor');

caseStudyCursorEle.forEach((el) => {
    el.onmouseenter = () => {
        cursor.classList.add('case-study');
        cursorInner.innerHTML = 'Case Study';
    }

    el.onmouseleave = () => {
        cursor.classList.remove('case-study');
        cursorInner.innerHTML = '';
    }
})

// Image Cursor
const projectList = document.querySelector('.projects__list');

window.onload = () => {
    const imageCursorEle = document.querySelectorAll('.image-cursor');
    
    imageCursorEle.forEach((el) => {
        el.onmouseenter = () => {
            cursor.classList.add('image');
    
            const srcImg = el.querySelector('.image-cursor > div > img').src;
            cursorInner.style.backgroundImage = `url('${srcImg}')`;
        }
    
        el.onmouseleave = () => {
            cursor.classList.remove('image');
            cursorInner.style.backgroundImage = ``;
        }
    })
}

// Detect Mobile
if( navigator.userAgent.match(/Android/i)
 || navigator.userAgent.match(/webOS/i)
 || navigator.userAgent.match(/iPhone/i)
 || navigator.userAgent.match(/iPad/i)
 || navigator.userAgent.match(/iPod/i)
 || navigator.userAgent.match(/BlackBerry/i)
 || navigator.userAgent.match(/Windows Phone/i)) {
    cursor.style.display = 'none';
}