$(".slick-notification").slick({
    slidesToShow: true,
    slidesToScroll: true,
    dots: false,
    vertical: true,
    variableWidth: false,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
  });

  $(".product-slider-slick").slick({
    rtl:true,
    infinite: true,
    arrows: true,
    pauseOnHover: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive:[
      {
      breakpoint:1680,
      settings:{
        slidesToShow:4,
      }
    },
    {
      breakpoint:1400,
      settings:{
        slidesToShow:3,
      }
    },
    {
      breakpoint:1200,
      settings:{
        slidesToShow:4,
      }
    },
    {
      breakpoint:992,
      settings:{
        slidesToShow:3,
      }
    },
    {
      breakpoint:660,
      settings:{
        slidesToShow:2,
      }
    },
    {
      breakpoint:380,
      settings:{
        slidesToShow:1,
      }
    },
  ]
  });

  $(".category-slider-slick").slick({
    rtl:true,
    infinite: true,
    arrows: true,
    pauseOnHover: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    responsive:[{
      breakpoint:1745,
      settings:{
        slidesToShow:6,
        dots:true,
        autoplay:true,
        autoplaySpeed:2500,
      }
    },
    {
      breakpoint:1450,
      settings:{
        slidesToShow:5,
        dots:true,
        autoplay:true,
        autoplaySpeed:2500,
      }
    },
    {
      breakpoint:910,
      settings:{
        slidesToShow:4,
        dots:true,
        autoplay:true,
        autoplaySpeed:2500,
      }
    },
    {
      breakpoint:730,
      settings:{
        slidesToShow:3,
        dots:true,
        autoplay:true,
        autoplaySpeed:2500,
      }
    },
    {
      breakpoint:410,
      settings:{
        slidesToShow:2,
        dots:true,
        autoplay:true,
        autoplaySpeed:2500,
      }
    },
  ]
  });
  
  $(".product-slider2-slick").slick({
    rtl:true,
    infinite: true,
    arrows: true,
    pauseOnHover: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive:[{
      breakpoint:1680,
      settings:{
        slidesToShow:4,
      }
    },
    {
      breakpoint:1400,
      settings:{
        slidesToShow:3,
      }
    },
    {
      breakpoint:1200,
      settings:{
        slidesToShow:4,
      }
    },
    {
      breakpoint:992,
      settings:{
        slidesToShow:3,
      }
    },
    {
      breakpoint:660,
      settings:{
        slidesToShow:2,
      }
    },
    {
      breakpoint:380,
      settings:{
        slidesToShow:1,
      }
    },
  ]
  });
  
  $(".related-slider-slick").slick({
    rtl:true,
    infinite: true,
    arrows: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    dots:true,
    responsive:[{
      breakpoint:1430,
      settings:{
        slidesToShow:5,
        autoplay:true,
        autoplaySpeed:3500,
      }
    },
    {
      breakpoint:1199,
      settings:{
        slidesToShow:4,
      }
    },
    {
      breakpoint:992,
      settings:{
        slidesToShow:3,
      }
    },
    {
      breakpoint:720,
      settings:{
        slidesToShow:2,
      }
    },
    {
      breakpoint:500,
      settings:{
        slidesToShow:1,
      }
    },
  ]
  });
  $(".best-selling-slider-slick").slick({
    rtl:true,
    infinite: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive:[{
      breakpoint:1495,
      settings:{
        slidesToShow:2,
        dots:true,
        autoplay:true,
        autoplaySpeed:2500,
      }
    },
    {
      breakpoint:1200,
      settings:{
        slidesToShow:3,
      }
    },
    {
      breakpoint:991,
      settings:{
        slidesToShow:2,
      }
    },
    {
      breakpoint:666,
      settings:{
        slidesToShow:1,
        dots:true,
        autoplay:true,
        autoplaySpeed:2500,
      }
    },
    {
      breakpoint:380,
      settings:{
        slidesToShow:1,
      }
    },
  ]
  });
  $(".blog-slider-slick").slick({
    rtl:true,
    infinite: true,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:2500,
    responsive:[{
      breakpoint:1550,
      settings:{
        slidesToShow:2,
      }
    },
    {
      breakpoint:1200,
      settings:{
        slidesToShow:3,
      }
    },
    {
      breakpoint:940,
      settings:{
        slidesToShow:2,
      }
    },
    {
      breakpoint:550,
      settings:{
        slidesToShow:1,
      }
    },
  ]
  });

  $(".details-preview-slider").slick({
    rtl:true,
    slidesToShow:1,
    slidesToScroll:1,
    arrows:false,
    fade:true,
    asNavFor:'.details-thumb-slider',
  });

  $(".details-thumb-slider").slick({
    rtl:true,
    slidesToShow:4,
    slidesToScroll:1,
    asNavFor:'.details-preview-slider',
    dots:false,
    focusOnSelect:true,
    vertical:true,
    responsive:[
      {
      breakpoint:1400,
      settings:{
        vertical:false,
      }
    },
    {
      breakpoint:992,
      settings:{
        vertical:true,
      }
    },
    {
      breakpoint:768,
      settings:{
        vertical:false,
      }
    },
    {
      breakpoint:430,
      settings:{
        slidesToShow:3,
        vertical:false,
      }
    },
  ]
  });
  $(".slick-slider-work").slick({
    rtl:true,
    infinite: true,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    margin:20,
    responsive:[{
      breakpoint:1550,
      settings:{
        slidesToShow:2,
      }
    },
    {
      breakpoint:1200,
      settings:{
        slidesToShow:3,
      }
    },
    {
      breakpoint:940,
      settings:{
        slidesToShow:2,
      }
    },
    {
      breakpoint:550,
      settings:{
        slidesToShow:1,
      }
    },
  ]
  });
  $(".slick-slider-team").slick({
    rtl:true,
    infinite: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots:true,
    responsive:[{
      breakpoint:1690,
      settings:{
        slidesToShow:3,
        autoplay:true,
        autoplaySpeed:200,
      }
    },
    {
      breakpoint:1190,
      settings:{
        slidesToShow:2,
      }
    },
    {
      breakpoint:767,
      settings:{
        slidesToShow:1,
        fade:true,
      }
    },
    {
      breakpoint:551,
      settings:{
        slidesToShow:1,
      }
    }
  ]
  });
  $(".slick-slider-people").slick({
    rtl:true,
    infinite: true,
    arrows: false,
    centerMode:true,
    centerPadding:'200px',
    slidesToShow: 3,
    slidesToScroll: 1,
    dots:true,
    responsive:[{
      breakpoint:1524,
      settings:{
        centerPadding:'150px',
      }
    },
    {
      breakpoint:1291,
      settings:{
        slidesToShow:2,
        centerPadding:'100px',
      }
    },
    {
      breakpoint:921,
      settings:{
        slidesToShow:2,
        centerPadding:'20px',
      }
    },
    {
      breakpoint:798,
      settings:{
        slidesToShow:1,
        centerPadding:'20px',
      }
    },
    {
      breakpoint:434,
      settings:{
        slidesToShow:1,
        centerPadding:'0',
      }
    }
  ]
  });
  $(".slick-slider-blog-latest").slick({
    rtl:true,
    infinite: true,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    dots:true,
    responsive:[{
      breakpoint:1690,
      settings:{
        slidesToShow:3,
        autoplay:true,
        autoplaySpeed:200,
      }
    },
    {
      breakpoint:1190,
      settings:{
        slidesToShow:2,
      }
    },
    {
      breakpoint:767,
      settings:{
        slidesToShow:1,
        fade:true,
      }
    },
    {
      breakpoint:551,
      settings:{
        slidesToShow:1,
      }
    }
  ]
  });
  $(".slick-slider-cate-shop").slick({
    rtl:true,
    infinite: true,
    arrows: false,
    slidesToShow: 7,
    slidesToScroll: 1,
    responsive:[{
      breakpoint:1690,
      settings:{
        slidesToShow:8,
        autoplay:true,
        autoplaySpeed:200,
      }
    },
    {
      breakpoint:1190,
      settings:{
        slidesToShow:6,
      }
    },
    {
      breakpoint:767,
      settings:{
        slidesToShow:4,
        fade:true,
      }
    },
    {
      breakpoint:551,
      settings:{
        slidesToShow:2,
      }
    },
    {
      breakpoint:420,
      settings:{
        slidesToShow:1,
      }
    }
  ]
  });
  $(".slick-slider-faq").slick({
    rtl:true,
    infinite: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive:[{
      breakpoint:992,
      settings:{
        slidesToShow:3,
        autoplay:true,
        autoplaySpeed:2000,
        dots:true,
      }
    },
    {
      breakpoint:768,
      settings:{
        slidesToShow:2,
        autoplay:true,
        autoplaySpeed:2000,
        dots:true,
      }
    },
    {
      breakpoint:474,
      settings:{
        slidesToShow:1,
        autoplay:true,
        autoplaySpeed:2000,
        dots:true,
      }
    }
  ]
  });