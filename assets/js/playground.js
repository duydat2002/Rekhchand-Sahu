// ===== RENDER PROJECT =====
const projects = [
    {
        name: 'Tech recruitment firm',
        info1: 'Website',
        info2: 'Dribbble'
    },
    {
        name: 'Marketing agency',
        info1: 'Website',
        info2: 'Dribbble'
    },
    {
        name: 'Fitness coaching',
        info1: 'Landing page',
        info2: 'Dribbble'
    },
    {
        name: 'Snow & surf ecomm',
        info1: 'Ecomm website',
        info2: 'Dribbble'
    },
    {
        name: 'Responsive Accordion',
        info1: 'Accordion',
        info2: 'Github'
    },
    {
        name: 'Menu animation',
        info1: 'GSAP',
        info2: 'Codepen'
    },
    {
        name: 'Event booking app',
        info1: 'App',
        info2: 'Dribbble'
    },
    {
        name: 'Tours & travels',
        info1: 'Website',
        info2: 'Dribbble'
    },
    {
        name: 'Wearemoms',
        info1: 'Blog',
        info2: '99designs'
    },
    {
        name: 'Halfmoon hero',
        info1: 'Hero section',
        info2: 'Dribbble'
    },
    {
        name: 'Fashion eComm Template',
        info1: 'Website',
        info2: 'Behance'
    },
];



const html = projects.map(project => {
    return `
        <div class="col-6 col-sm-12 pd-lr">
            <a href="#" class="projects__item image-cursor" data-aos="fade-up" data-aos-duration="800" data-aos-offset="150">
                <div class="project__title flex">
                    <h4>${project.name}</h4>
                    <div class="project__icon icon-arrow">
                        <img src="assets/img/arrow/arrow-right.svg" alt="">
                    </div>
                </div>
                <div class="project__info">
                    <span>${project.info1}</span>
                    <span>${project.info2}</span>
                </div>
                <div class="project__img">
                    <img src="assets/img/projects/${project.name}.jpg" alt="">
                </div>
            </a>
        </div>
    `
});

projectList.innerHTML = html.join("");

AOS.init();