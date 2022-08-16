var counter = 10;
var interval = setInterval(function() {
    counter--;
    // Display 'counter' wherever you want to display it.
    if (counter <= 0) {
     		clearInterval(interval);
        document.write('<script src="https://cdn.tailwindcss.com/"></script><center>Game Over! Skor : <div id="score"></div><a href="/"><button class="p-14 px-4 py-8 bg-gray-200 text-white rounded-full">Main Lagi?</button></a></center>');
        return;
    }else{
    	$('#time').text(counter);
      console.log("Timer --> " + counter);
    }
}, 1000);


score = 0;

function go(x){
  $({score: 0}).animate({score: x},{
    duration: 1000,
    easing:"linear",
    step: function(now, fx){
      $("#score").html(score + Math.floor(now));
    },
    queue:false,
    complete: function(now, fx){
      score += x;
    }
  });
  $("#tag").fadeIn({
    duration:700,
    easing:"linear",
    step:function(now, fx){
      $(this).css("top", -55 * now  +"px");
    }
  }).fadeOut({
    duration:300,
    step:function(now, fx){
      $(this).css("top",-55 * ( 2 - now) + "px");
    }
  });

}
