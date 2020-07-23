jQuery(document).ready(function($){
  
  $("form").submit(function(e) {
        
    e.preventDefault();
      
    var formData = $(this).serialize();
    
    console.log(formData);

        $.post('/email', formData, function (data) {
  
        console.log(data);
  
        $('form.contact_form').css("display", "none");
  
        $('section.afterEmail').html(data);
        
        });

      })
  });


  //https://www.youtube.com/watch?v=Xj3xZlLBVX0