/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    /*Active link*/
    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');

    /*Remove menu mobile*/
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1300,
    reset: true
});

/*SCROLL HOME*/
sr.reveal('.home__title', { delay: 100 });
sr.reveal('.button', { delay: 200 });
sr.reveal('.home__txt', { delay: 200 });
sr.reveal('.home__social-icon', { interval: 200 });
sr.reveal('.circle', { delay: 100 })
sr.reveal('.circle2', { delay: 100 })

/*SCROLL ABOUT*/
sr.reveal('.about__img', {});
sr.reveal('.about__subtitle', { delay: 100 });
sr.reveal('.about__text', { delay: 100 });

/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle', { delay: 100 });
sr.reveal('.skills__text', { delay: 100 });
sr.reveal('.skills__data', { interval: 100 });
sr.reveal('.skills__img', { delay: 100 });

/*SCROLL WORK*/
sr.reveal('.work__img', { interval: 100 });

/*SCROLL CONTACT*/
sr.reveal('.contact__input', { interval: 100 });




