$(document).ready(function() {

  
  var goodDesign = {
    
    title : 'The Value of Good Design',
    
    description : '\"Is there art in a broomstick? Yes, says Manhattan\'s Museum of Modern Art, if it is designed both for usefulness and good looks.\"',
    
    autor : 'AUTORI VARI',
    
    artwork : 'fiat 500, sedia,<br>pinza, barattolo',
    
    date : 'UNTIL<br>MARCH 30',
    
    imagefile : 'gallery1.jpg'
    
  }
  
    var miro = {
    
    title : 'Joan Miró Birth of the World',
    
    description : '\“You and all my writer friends have given me much help and improved my understanding of many things.\”',
    
    autor : 'JOAN MIR\u00D2',
    
    artwork: 'La chanteuse<br>melancolique',
    
    date : 'UNTIL<br>APRIL 27',
    
    imagefile : 'gallery2.jpg'
    
  }
    
    
    var vanGogh = {
    
    title : 'Collection Galleries 1880s–1950s',
    
    description : 'The works displayed on this floor roughly span the years 1880 to 1950. Within an overall chronological flow, galleries highlight individual stylistic movements, artists, and themes.',
    
    autor : 'VAN GOGH',
    
    artwork: 'Notte stellata',
    
    date : 'UNTIL<br>JUNE 12',
    
    imagefile : 'gallery3.jpg'
    
  }
    
    
  var gallery = [goodDesign , miro , vanGogh]
    
    
  var currentSlide = 0;
  var maxSlide = gallery.length
  
  loading()
  
  setInterval(function(){
    
    if(currentSlide < maxSlide-1){
      currentSlide++
      loading()
    } else {
      currentSlide = 0;
      loading()
    }
    
  },5000)
  
  
  function loading(){
  
    
    $('.gallery-ex').empty()
    $('.gallery-ex').append('<img src="img/' + gallery[currentSlide].imagefile + '">')
      
    $('.gallery-ex-info h2').text(gallery[currentSlide].title)

    
    $('.gallery-ex-info p').text(gallery[currentSlide].description)
   
    
    $('.date-ex p').html(gallery[currentSlide].date)

    
    $('.opera-title h4').html(gallery[currentSlide].autor)
   
    
    $('.opera-title p').html(gallery[currentSlide].artwork)
    
    
    $('.gallery-ex, .gallery-ex-info h2, .gallery-ex-info p, .date-ex p, .opera-title h4, .opera-title p').hide().fadeIn(1000)
    
    $('.fa-square-full').removeClass('selected')
    $('.fa-square-full').eq(currentSlide).addClass('selected')
  }
  
   
  
  
    

  
  $(window).scroll( function(){
      
      $('.event').each(function() {
        var bottomObject = $(this).offset().top + $(this).outerHeight() /2;
       
        var bottomWindow = $(window).scrollTop() + $(window).height();
        
          if( bottomWindow > bottomObject ){
                $(this).children('.hidden-sx').eq(0).addClass('shown')
                $(this).children('.hidden-dx').eq(0).addClass('shown')
              
             setTimeout(() => {
                $(this).children('.hidden-sx').eq(1).addClass('shown')
                $(this).children('.hidden-dx').eq(1).addClass('shown')
     
    }, 300);
       }
      
      if( bottomWindow < bottomObject ){
                $(this).children('.hidden-sx').eq(0).removeClass('shown')
                $(this).children('.hidden-dx').eq(0).removeClass('shown')
              
             setTimeout(() => {
                $(this).children('.hidden-sx').eq(1).removeClass('shown')
                $(this).children('.hidden-dx').eq(1).removeClass('shown')
     
    }, 300);
       }
        
      })
      
     
            
    
      
    });
});