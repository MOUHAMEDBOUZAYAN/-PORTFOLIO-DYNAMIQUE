$(document).ready(function () {
    /*======================= Menu Icon Toggle ============================*/
    let $menuIcon = $('#menu-icon');
    let $navbar = $('.navbar');

    $menuIcon.on('click', function () {
        $(this).toggleClass('fa-solid fa-x');
        $navbar.toggleClass('active');
    });

    /*======================= Scroll Sections Active Link ============================*/
    let $sections = $('section');
    let $navLinks = $('header nav a');

    $(window).on('scroll', function () {
        let top = $(this).scrollTop();

        $sections.each(function () {
            let $section = $(this);
            let offset = $section.offset().top - 150;
            let height = $section.outerHeight();
            let id = $section.attr('id');

            if (top >= offset && top < offset + height) {
                $navLinks.removeClass('active');
                $('header nav a[href*="' + id + '"]').addClass('active');
            }
        });

        /*======================= Sticky Navbar ============================*/
        let $header = $('header');
        $header.toggleClass('sticky', $(this).scrollTop() > 100);
    });

/*======================= remove toggle icon and navebare when click navbar link ( scrol)   ============================*/
$(this).removeClass('fa-solid fa-x');
$navbar.removeClass('active');



});

/*======================= scroll reveal ============================*/
ScrollReveal({
    // reset:true,
    distance :'80px',
    duration:2000,
    delay:200
});

ScrollReveal().reveal('.home-content, .heading',{ origin:'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box , .contact form',{ origin:'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img',{ origin:'left'});
ScrollReveal().reveal('.home-content p, .about-content',{ origin:'right'});

/*======================= typed js ============================*/
var typed = new Typed(".text-multiple", {
    strings:["Devlopeur Full-stack" , "designer" , "trader-analisyc"] ,
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
function getElementByIdAndCheck(name) {
    if (!name) {
        alert("leoo");
    } else {
        return document.getElementById(name);
    }
}





