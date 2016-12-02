$(document).ready(function(){

  $.get('http://localhost:3000/cerial', function(data){
    var data = data;
    console.log(data);
    $('.click-me').click(function(){
      $(".stuff-here").html("")
      let random = Math.floor(Math.random() * data.length);
      $(".stuff-here").append(`
      <p>Hey baby</p>  <p>${data[random].quote}</p>
        `);
    });

  });
});
