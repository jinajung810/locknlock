$(function(){
    mainInit();
    $(document).on('click','a[href="#"]',function(e){ e.preventDefault()}) 
})

function mainInit(){
  menuBar();
  visual();
  Mycontainer();
  family();
}

function menuBar(){
  let $allMenu = $('#bars .all-menu')
  let $gnb = $('#siteMap')
  let $subMenu = $('#siteMap .gnb li ul')

  $allMenu.on('click',function(){
    $(this).toggleClass('active')
    $gnb.toggleClass('show')
  })
  $subMenu.hover(function(){
    $(this).prev().toggleClass('hover')
  })
}

function visual(){
  var swiper = new Swiper(".myVisual", {
    spaceBetween: 30,
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop: true,
  });
}

function Mycontainer(){
  var swiper = new Swiper(".mySwiper", {
    grabCursor: true,
    loop: true,
    spaceBetween: 10,
    speed: 500,
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },
    slidesPerView: 1,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".mySwiper2", {
    grabCursor: true,
    loop: true,
    spaceBetween: 35,
    speed: 500,
    autoplay: {
      delay: 4530,
      disableOnInteraction: false,
    },
    thumbs: {
      swiper: swiper,
    },
  });
}

$(window).resize(function(){ 
  if (window.innerWidth > 767) { 
    let $dt = $('.SmallAppliance .Appliance dt')
    let $dd = $('.SmallAppliance .Appliance dd')
  
    $dt.removeClass('on')
    $dt.first().addClass('on')
  
    $dt.on('click',function(){
      $dd.stop().animate({width:0},400);
      $(this).next().stop().animate({width:'56.7708vw'},400)
  
      $dt.removeClass('on')
      $(this).addClass('on')
    })
  } else {
    let $dtm = $('.SmallAppliance .Appliance dt')
    let $ddm = $('.SmallAppliance .Appliance dd')
  
    $dtm.removeClass('on')
    $dtm.first().addClass('on')
  
    $dtm.on('click',function(){
      $ddm.stop().animate({height:0},400);
      $(this).next().stop().animate({height:'54.7588vw'},400)
  
      $dtm.removeClass('on')
      $(this).addClass('on')
    })
  }
}).resize();

function family(){
  $('#footer .family .title').on('click',function(){
    $('#footer .family ul').toggleClass('on')
  })
}