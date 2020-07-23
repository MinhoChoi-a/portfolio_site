jQuery(document).ready(function($){
  
  $("button.send").closest("form").submit(function(e) {
        
    e.preventDefault();
    
      var formData = new FormData($(this));
    
      console.log(formData);

        $.get('/email').then(function (data) {
  
        console.log(data);
  
        $('form.contact_form').css("display", "none");
  
        $('section.afterEmail').html(data);
          });
      })
  });


  //https://www.youtube.com/watch?v=Xj3xZlLBVX0