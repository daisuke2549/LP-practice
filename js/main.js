$(document).ready(function () {

      $('#form').submit(function (event) {
        var formData = $('#form').serialize();
        $.ajax({
          url: "https://docs.google.com/forms/hogehoge",
          data: formData,
          type: "POST",
          dataType: "xml",
          statusCode: {
            0: function () {
              $(".end-message").slideDown();
              $(".submit-btn").fadeOut();
              //window.location.href = "thanks.html";
            },
            200: function () {
              $(".false-message").slideDown();
            }
          }
        });
        event.preventDefault();
      });

    });
    $(function(){
      $("#open").show();
      $("#close").hide();

$("#open").click(function(){

  $("#navi").slideToggle();
      $("#open").hide();
      $("#close").show();
});
      

$("#close").click(function(){
  
  $("#navi").slideToggle();
      $("#open").show();
      $("#close").hide();
});

});
