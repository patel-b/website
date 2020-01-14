const navSlide = () => {
    const burger = document.querySelector('.burger');
    /*const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');*/
    const topNav = document.querySelector('.top-nav');
    const navLink = document.querySelector('.nav-link');
    
    burger.addEventListener('click', () => {
        /*//Toggle Nav 
        nav.classList.toggle('nav-active');

        //Animate Links
        navLinks.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.45}s`;
            }
        });*/
    
        //Toggle Nav
        topNav.classList.toggle('open');

        //Burger Animation
        burger.classList.toggle('toggle');

        //Nav Links
        //addEventListener('click', function() {
            //('.burger').removeClass('burger');
        //    ('.nav-link').removeClass('.nav-list');
        //});
    
    });
    
    $('.top-nav .nav-list .nav-link').on('click', function () {
        $('.burger').removeClass('open');
        $('.top-nav').removeClass('open');
    });

    $('nav a[href*="#"]').on('click', function() {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 100
        }, 2000);
    });

    $('#up').on('click', function () {
        $('html, body').animate( {
            scrollTop:0
        }, 2000);
    })
    

    AOS.init({
        easing: 'ease',
        duration: 1800
    });
}

navSlide();

/*$(document).ready(function () {
    $('.burger').on('click', function () {
        $(this).toggle('open');
        $('.top_nav').toggle('open');
    });
});*/