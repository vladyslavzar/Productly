$(function(){
    $('.strategiescontainerslider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        arrows: false,
        responsive: [
          {
            breakpoint: 900,
            settings:{
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          }
        ]
      });
});
let burgerbutton= document.getElementById("burger");
let menu=document.getElementById("menu");
burgerbutton.onclick = function(){
  menu.classList.toggle("active")
}