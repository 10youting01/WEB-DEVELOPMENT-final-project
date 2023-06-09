$(function(){

	var container = $('#ball_container');
  var restart_div = $('#ball_restart_div');
  var restart_button = $('#ball_restart_button');
  var restart_word = $('#ball_restart_word');
  var word = $('#ball_word');

  var textWrapper = document.querySelector('.ball_restart_word .ball_letters');
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='ball_letter'>$&</span>");

  var ball_div1 = $('#ball_div1');
  var ball_div2 = $('#ball_div2');
  var ball_div3 = $('#ball_div3');
  var ball_div4 = $('#ball_div4');
  var ball_div5 = $('#ball_div5');
  var ball_div6 = $('#ball_div6');
  var ball_div7 = $('#ball_div7');
  var ball_div8 = $('#ball_div8');
  var ball_div9 = $('#ball_div9');
  var ball_div10 = $('#ball_div10');
  var ball_div11 = $('#ball_div11');
  var ball_div12 = $('#ball_div12');
  var ball_div13 = $('#ball_div13');
  var ball_div14 = $('#ball_div14');
  var ball_div15 = $('#ball_div15');

  var divs = [ball_div1, ball_div2, ball_div3, ball_div4, ball_div5,
              ball_div6, ball_div7, ball_div8, ball_div9, ball_div10,
              ball_div11, ball_div12, ball_div13, ball_div14, ball_div15]

  var ball_1 = $('<img class="ball">')
  var ball_2 = $('<img class="ball">')
  var ball_3 = $('<img class="ball">');
  var ball_4 = $('<img class="ball">');
  var ball_5 = $('<img class="ball">');
  var ball_6 = $('<img class="ball">');
  var ball_7 = $('<img class="ball">');
  var ball_8 = $('<img class="ball">');
  var ball_9 = $('<img class="ball">');
  var ball_10 = $('<img class="ball">');
  var ball_11 = $('<img class="ball">')
  var ball_12 = $('<img class="ball">')
  var ball_13 = $('<img class="ball">');
  var ball_14 = $('<img class="ball">');
  var ball_15 = $('<img class="ball">');

  var text_on_ball = ['<div id="ball_text" onclick="remove(this)">+10</div>',
                       '<div id="ball_text" onclick="remove(this)">×2</div>', 
                       '<div id="ball_text" onclick="remove(this)">÷2</div>', 
                       '<div id="ball_text" onclick="remove(this)">+50</div>', 
                       '<div id="ball_text" onclick="remove(this)">-50</div>', 
                       '<div id="ball_text" onclick="remove(this)">+20</div>', 
                       '<div id="ball_text" onclick="remove(this)">0</div>', 
                       '<div id="ball_text" onclick="remove(this)">+5</div>', 
                       '<div id="ball_text" onclick="remove(this)">-5</div>', 
                       '<div id="ball_text" onclick="remove(this)">+2</div>' ]

  ball_div1.append(ball_1);
  ball_div2.append(ball_2);
  ball_div3.append(ball_3);
  ball_div4.append(ball_4);
  ball_div5.append(ball_5);
  ball_div6.append(ball_6);
  ball_div7.append(ball_7);
  ball_div8.append(ball_8);
  ball_div9.append(ball_9);
  ball_div10.append(ball_10);
  ball_div11.append(ball_11);
  ball_div12.append(ball_12);
  ball_div13.append(ball_13);
  ball_div14.append(ball_14);
  ball_div15.append(ball_15);

	var container_left = parseInt(container.css('left'));
  var container_width = parseInt(container.width());
  var container_height = parseInt(container.height());

  // console.log(container_height)//642

  var ball_width = parseInt(ball_div1.width());
  var ball_height = parseInt(ball_div1.height());

  var speed = 3;

	var ball_type = ['./MainPageImg/ball_1.png','./MainPageImg/ball_2.png','./MainPageImg/ball_3.png','./MainPageImg/ball_4.png','./MainPageImg/ball_5.png','./MainPageImg/ball_6.png']

	var initial_random = Math.floor(Math.random() * ball_type.length);
  ball_1.attr('src', ball_type[initial_random])

  initial_random = Math.floor(Math.random() * ball_type.length);
  ball_2.attr('src', ball_type[initial_random])

  initial_random = Math.floor(Math.random() * ball_type.length);
  ball_3.attr('src', ball_type[initial_random])

  initial_random = Math.floor(Math.random() * ball_type.length);
  ball_4.attr('src', ball_type[initial_random])

  initial_random = Math.floor(Math.random() * ball_type.length);
  ball_5.attr('src', ball_type[initial_random])

  initial_random = Math.floor(Math.random() * ball_type.length);
  ball_6.attr('src', ball_type[initial_random])

  initial_random = Math.floor(Math.random() * ball_type.length);
  ball_7.attr('src', ball_type[initial_random])

  initial_random = Math.floor(Math.random() * ball_type.length);
  ball_8.attr('src', ball_type[initial_random])

  initial_random = Math.floor(Math.random() * ball_type.length);
  ball_9.attr('src', ball_type[initial_random])

  initial_random = Math.floor(Math.random() * ball_type.length);
  ball_10.attr('src', ball_type[initial_random])

  initial_random = Math.floor(Math.random() * ball_type.length);
  ball_11.attr('src', ball_type[initial_random])

  initial_random = Math.floor(Math.random() * ball_type.length);
  ball_12.attr('src', ball_type[initial_random])

  initial_random = Math.floor(Math.random() * ball_type.length);
  ball_13.attr('src', ball_type[initial_random])

  initial_random = Math.floor(Math.random() * ball_type.length);
  ball_14.attr('src', ball_type[initial_random])

  initial_random = Math.floor(Math.random() * ball_type.length);
  ball_15.attr('src', ball_type[initial_random])

 
  initial_random = Math.floor(Math.random() * text_on_ball.length);
  ball_div1.append(text_on_ball[initial_random]);

  initial_random = Math.floor(Math.random() * text_on_ball.length);
  ball_div2.append(text_on_ball[initial_random]);

  initial_random = Math.floor(Math.random() * text_on_ball.length);
  ball_div3.append(text_on_ball[initial_random]);

  initial_random = Math.floor(Math.random() * text_on_ball.length);
  ball_div4.append(text_on_ball[initial_random]);

  initial_random = Math.floor(Math.random() * text_on_ball.length);
  ball_div5.append(text_on_ball[initial_random]);

  initial_random = Math.floor(Math.random() * text_on_ball.length);
  ball_div6.append(text_on_ball[initial_random]);

  initial_random = Math.floor(Math.random() * text_on_ball.length);
  ball_div7.append(text_on_ball[initial_random]);

  initial_random = Math.floor(Math.random() * text_on_ball.length);
  ball_div8.append(text_on_ball[initial_random]);

  initial_random = Math.floor(Math.random() * text_on_ball.length);
  ball_div9.append(text_on_ball[initial_random]);

  initial_random = Math.floor(Math.random() * text_on_ball.length);
  ball_div10.append(text_on_ball[initial_random]);

  initial_random = Math.floor(Math.random() * text_on_ball.length);
  ball_div11.append(text_on_ball[initial_random]);

  initial_random = Math.floor(Math.random() * text_on_ball.length);
  ball_div12.append(text_on_ball[initial_random]);

  initial_random = Math.floor(Math.random() * text_on_ball.length);
  ball_div13.append(text_on_ball[initial_random]);

  initial_random = Math.floor(Math.random() * text_on_ball.length);
  ball_div14.append(text_on_ball[initial_random]);

  initial_random = Math.floor(Math.random() * text_on_ball.length);
  ball_div15.append(text_on_ball[initial_random]);

  var game_over = false;

  var half_min = 30;
  var display = $('#ball_timer')
  startTimer(half_min, display);

  var anim_id = requestAnimationFrame(repeat);

  function repeat(){

    // score_counter++;

    // if (score_counter % 600 == 0) {
    //      speed = speed + 0.5;
    // }
      console.log("endter if")
      ball_down(ball_div1);
      ball_down(ball_div2);
      ball_down(ball_div3);
      ball_down(ball_div4);
      ball_down(ball_div5);
      ball_down(ball_div6);
      ball_down(ball_div7);
      ball_down(ball_div8);
      ball_down(ball_div9);
      ball_down(ball_div10);
      ball_down(ball_div11);
      ball_down(ball_div12);
      ball_down(ball_div13);
      ball_down(ball_div14);
      ball_down(ball_div15);

      anim_id = requestAnimationFrame(repeat);
  }

  function ball_down(ball_div) {

    // console.log("enter ball_down")

    var ball_current_top = parseInt(ball_div.css('top'));

    // console.log(ball_current_top)

    if (ball_current_top + ball_height < 0) {
        
      // console.log("enter ball_down if")
      // console.log(ball_current_top) 

      var collision = true    
    
      ball_div.children().remove();

      var new_ball = $('<img class="ball">')
      ball_div.append(new_ball);

      //隨機指定氣球的顏色樣式
      var random = Math.floor(Math.random() * ball_type.length);
      new_ball.attr('src', ball_type[random])

      random = Math.floor(Math.random() * text_on_ball.length);
      ball_div.append(text_on_ball[random]);

      while (collision){
        ball_current_top = parseInt(Math.random() * (1600) + 650);
        ball_div.css('top', ball_current_top + speed);
        var ball_left = parseInt(Math.random() * (container_width - ball_width));
        ball_div.css('left', ball_left);

        for(let i=0; i<divs.length; i++){
            if (divs[i] !== ball_div){
              if (!crash(divs[i], ball_div)){
                collision = false
              }else{
                collision = true
                break;
              }
            }
          }
      }
    console.log(ball_current_top)
    console.log(ball_left)
    
    }
    
    ball_div.css('top', ball_current_top - speed);

  }

  restart_button.click(function() {
        location.reload();
  });

  function crash($div1, $div2) {

    // 用offset取得div和上層元素的距離，以x和y表示
    //代表div的頂部和右邊
    var x1 = $div1.offset().left;
    var y1 = $div1.offset().top;
    var x2 = $div2.offset().left;
    var y2 = $div2.offset().top;

    // 用outerHeight取得div的高，tru代表包含margin
    var h1 = $div1.outerHeight(true);
    var h2 = $div2.outerHeight(true);
    // 用outerWidth取得div的寬，tru代表包含margin
    var w1 = $div1.outerWidth(true);
    var w2 = $div2.outerWidth(true);

    //代表div的底部
    var b1 = y1 + h1;
    var b2 = y2 + h2;
    //代表div右邊的寬
    var r1 = x1 + w1;
    var r2 = x2 + w2;

    if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
    return true;
  }

  function startTimer(duration, display){
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.text(minutes + ":" + seconds);

        if (--timer < 0) {
            stop_the_game();
        }
    }, 1000);
  }

  function stop_the_game() {
        game_over = true;
        cancelAnimationFrame(anim_id);
        display.text("00:00");

        restart_div.addClass("ball_animate ball_pop")
        restart_div.show();

        anime.timeline({loop: true})
          .add({
            targets: '.ball_restart_word .ball_letter',
            rotateY: [-90, 0],
            duration: 2000,
            delay: (el, i) => 45 * i
          }).add({
            targets: '.ball_restart_word',
            opacity: 0,
            duration: 1000,
            easing: "easeOutExpo",
            delay: 1000
          });

        restart_word.focus();
        // setRanker();
    } 

}); 

function remove(ball){
  // console.log(ball);
  // console.log(ball.previousElementSibling);
  // console.log(ball.innerHTML);

  var score_text = $('#ball_score').text();

  if (ball.innerHTML==0){
    var s = 0
  }else if (ball.innerHTML=="÷2"){
    // console.log(score_text);
    var s = Math.floor(score_text / 2)
    // console.log(s);
  }else if (ball.innerHTML=="×2"){
    var s = score_text * 2
  }else{
    score_text += ball.innerHTML;
    var s = eval(score_text)
    // console.log(typeof(s));    
  }
  $('#ball_score').text(s);
 
  // console.log(s);

  ball.previousElementSibling.remove();
  ball.remove();
}