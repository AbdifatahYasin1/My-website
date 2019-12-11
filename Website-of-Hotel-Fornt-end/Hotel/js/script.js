$(document).ready(function(){
    // toggler-btn
$('.navbar-toggler').click(function(){
    $('.navbar-toggler').toggleClass('change')
})
    // sticky navbar less paddin
    $(window).scroll(function(){
        let postion = $(this).scrollTop();
        if(postion >= 718){
            $('.navbar').addClass('.navbar-background');
            $('.navbar').addClass('fixed-top');
        }
        else{
            $('.navbar').removeClass('navbar-background');
            $('.navbar').removeClass('fixed-top');
        }
    })
    // smooth scroll
    $('.nav-item a, .header-link, #back-top').click(function(){
        link.preventDefault();
        let target=$(this).attr('href');
        $('html,body').stop().animation({
            scrollTop:$(target).offset().top -25
        },3000);
    })
    // back to top
     $(window).scroll(function(){
        let postion = $(this).scrollTop();
        if(postion >= 718){
            $('#back-to-top').addClass('scrollTop');
        }
        else{
           $('#back-to-top').removeClass('scrollTop');
        }
    })
     // Ripples
    $("#header, .info").ripples({
  dropRadius: 25,
  perturbance: 0.1,
  
});
    // magnific popup
    $('.parent-container').magnificPopup({
  delegate: 'a', 
  type: 'image',
        
  gallery:{
      enabled: true
  }
  
});
});

