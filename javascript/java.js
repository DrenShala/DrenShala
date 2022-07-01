$(document).ready(function(){

  var cardList = $('.card');
  var navList = $('.navigation');

  $('.navigation').on('mouseenter', function(event){

    var navTarget = event.target;

    for(i = 0; i < cardList.length; i++ ){

      if(cardList[i].id == navTarget.id){
        navList[i].classList.add('reverse');
        cardList[i].classList.add('active');
      }
      else{
        navList[i].classList.remove('reverse');
        cardList[i].classList.remove('active');
      }
    }
    
  });

  
  // project description reveal ↓
  $('.cv__container').on('mouseenter', function(){
    $('.reveal__cv, .cv__description').addClass('active__cv');
  });

  $('.cv__container').on('mouseleave', function(){
    $('.reveal__cv, .cv__description').removeClass('active__cv');
  })

  $('.project__container').on('mouseenter', function(){
    $('.reveal__project, .project__description').addClass('active__cv');
  });

  $('.project__container').on('mouseleave', function(){
    $('.reveal__project, .project__description').removeClass('active__cv');
  })

});