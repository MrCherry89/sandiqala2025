$(document).ready(function () {
  $(".slider-for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    asNavFor: ".slider-nav",
    prevArrow: $(".planning-solutions-wrap .slider-navigation .slick-prev"),
    nextArrow: $(".planning-solutions-wrap .slider-navigation .slick-next"),
  });
  $(".slider-nav").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: ".slider-for",
    dots: false,
    arrows: false,
    focusOnSelect: true,
    vertical: true,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          focusOnSelect: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          vertical: false,
          centerMode: true,
          slidesToShow: 2,
          focusOnSelect: true,
        },
      },
      {
        breakpoint: 475,
        settings: {
          vertical: false,
          centerMode: true,
          slidesToShow: 1,
          focusOnSelect: true,
        },
      },
    ],
  });

  $(".scroll").smoothScroll({
    speed: 1000,
  });

  $(".slider-info").each(function () {
    $(this).slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      dots: false,
      arrows: true,
      prevArrow: $(this).closest(".slider-info-wrap").find(".slick-prev"),
      nextArrow: $(this).closest(".slider-info-wrap").find(".slick-next"),
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            variableWidth: true,
          },
        },
      ],
    });
  });

  $(".info-slider").each(function () {
    $(this).slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: false,
      centerMode: true,
      centerPadding: 0,
      variableWidth: true,
      focusOnSelect: true,
      autoplay: true,
      autoplaySpeed: 2000,
      cssEase: "ease-in-out",
      speed: 800,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: false,
            variableWidth: false,
            focusOnSelect: false,
          },
        },
      ],
    });
  });

  $(".map-info-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 1000,
    cssEase: "ease-in-out",
    speed: 700,
  });

  AOS.init();
});
