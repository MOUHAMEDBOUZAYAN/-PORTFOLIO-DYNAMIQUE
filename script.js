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
});
