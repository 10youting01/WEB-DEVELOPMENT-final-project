$(function() {

  // var choose_car = $('#choose_car');
  

  var container = $('#car_container');
  var car = $('#car_car');
  var car_1 = $('#car_car_1');
  var car_2 = $('#car_car_2');
  var car_3 = $('#car_car_3');
  var car_4 = $('#car_car_4');
  var car_5 = $('#car_car_5');
  var cars = [car_1, car_2, car_3, car_4, car_5];
  var line_1 = $('#car_line_1');
  var line_2 = $('#car_line_2');
  var line_3 = $('#car_line_3');
  var restart_div = $('#car_restart_div');
  var restart_button = $('#car_restart');
  var score = $('#car_score');
  var ending_car = $('#car_ending_car');
  var restart_word = $('#car_restart_word')

  var textWrapper = document.querySelector('#car_restart_word .car_letters');
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='car_letter'>$&</span>");

  var car_type = ['./MainPageImg/car_a.png','./MainPageImg/car_b.png','./MainPageImg/car_c.png','./MainPageImg/car_d.png','./MainPageImg/car_e.png','./MainPageImg/car_f.png','./MainPageImg/car_g.png','./MainPageImg/car_h.png','./MainPageImg/car_i.png','./MainPageImg/car_j.png','./MainPageImg/car_k.png','./MainPageImg/car_l.png','./MainPageImg/car_m.png']

  var initial_random1 = Math.floor(Math.random() * car_type.length);
  car_1.attr('src', car_type[initial_random1])

  var initial_random2 = Math.floor(Math.random() * car_type.length);
  car_2.attr('src', car_type[initial_random2])

  var initial_random3 = Math.floor(Math.random() * car_type.length);
  car_3.attr('src', car_type[initial_random3])

  var initial_random4 = Math.floor(Math.random() * car_type.length);
  car_4.attr('src', car_type[initial_random4])

  var initial_random5 = Math.floor(Math.random() * car_type.length);
  car_5.attr('src', car_type[initial_random5])

  var ranker = [10, 9, 8, 7, 6]
  // localStorage.setItem('no1', ranker[0]);
  // localStorage.setItem('no2', ranker[1]);
  // localStorage.setItem('no3', ranker[2]);
  // localStorage.setItem('no4', ranker[3]);
  // localStorage.setItem('no5', ranker[4]);
  // 用localStorage存最高分數

  var no1 = localStorage.getItem('no1');
  var no2 = localStorage.getItem('no2');
  var no3 = localStorage.getItem('no3');
  var no4 = localStorage.getItem('no4');  
  var no5 = localStorage.getItem('no5');
  $('#no1').text(no1);
  $('#no2').text(no2);
  $('#no3').text(no3);
  $('#no4').text(no4);
  $('#no5').text(no5);
  var ranker = [no1, no2, no3, no4, no5]
  console.log(no5)


  // 這裡存一些需要固定不動的數值

  // container的位置數值
  var container_left = parseInt(container.css('left'));
  var container_width = parseInt(container.width());
  var container_height = parseInt(container.height());

  // 自己的車子的長寬數值
  var car_width = parseInt(car.width());
  var car_height = parseInt(car.height());

  // 遊戲贏或輸的variable
  var game_over = false;

  var score_counter = 1;

  var speed = 2;
  var line_speed = 5;

  // 是否在移動的variable
  var move_right = false;
  var move_left = false;
  var move_up = false;
  var move_down = false;

  // 操縱鍵盤來控制進行遊戲的部分

  // keydownm偵測按鍵按下
  // requestAnimationFrame()代表呼叫括號內的function，繪製動畫並更新畫面
  $(document).on('keydown', function(e) {
    if (game_over === false) {
      // keycode: 左 = 37；上 = 38；右 = 39；下 = 40
      var key = e.keyCode;
      if (key === 37 && move_left === false) {
        move_left = requestAnimationFrame(left);
      } else if (key === 39 && move_right === false) {
        move_right = requestAnimationFrame(right);
      } else if (key === 38 && move_up === false) {
        move_up = requestAnimationFrame(up);
      } else if (key === 40 && move_down === false) {
        move_down = requestAnimationFrame(down);
      }
    }
  });

  //keyup偵測放開按鍵（如果沒有加，動了一步就不能再動了）
  //requestAnimationFrame()代表停止剛剛被呼叫的動畫
  $(document).on('keyup', function(e) {
    if (game_over === false) {
      var key = e.keyCode;
      if (key === 37) {
        cancelAnimationFrame(move_left);
        move_left = false;
      } else if (key === 39) {
        cancelAnimationFrame(move_right);
        move_right = false;
      } else if (key === 38) {
        cancelAnimationFrame(move_up);
        move_up = false;
      } else if (key === 40) {
        cancelAnimationFrame(move_down);
        move_down = false;
      }
    }
  });

  
  function left() {
    // 如果遊戲尚未結束，且車子沒有碰到邊界
    if (game_over === false && parseInt(car.css('left')) > 0) {
      car.css('left', parseInt(car.css('left')) - 5);
      move_left = requestAnimationFrame(left);
    }
  }

  function right() {
    // 如果遊戲尚未結束，且車子沒有碰到邊界
    if (game_over === false && parseInt(car.css('left')) < container_width - car_width) {
      car.css('left', parseInt(car.css('left')) + 5);
      move_right = requestAnimationFrame(right);
    }
  }

  function up() {
    // 如果遊戲尚未結束，且車子沒有碰到邊界
    if (game_over === false && parseInt(car.css('top')) > 0) {
      car.css('top', parseInt(car.css('top')) - 3);
      move_up = requestAnimationFrame(up);
    }
  }

  function down() {
    // 如果遊戲尚未結束，且車子沒有碰到邊界
    if (game_over === false && parseInt(car.css('top')) < container_height - car_height) {
      car.css('top', parseInt(car.css('top')) + 3);
      move_down = requestAnimationFrame(down);
    }
  }

  // 車子和背景的相對移動
  var anim_id = requestAnimationFrame(repeat);

  function repeat() {

    // localStorage.clear()

    if (crash(car, car_1) || crash(car, car_2) || crash(car, car_3) || crash(car, car_4) || crash(car, car_5)) {
      stop_the_game();
      return;
    }

    // score_counter一直加上去
    score_counter++;

    // 每過20次動畫加一次分數
    if (score_counter % 20 == 0) {
      score.text(parseInt(score.text()) + 1);
    }
    if (score_counter % 500 == 0) {
      speed++;
      line_speed++;
    }

    car_down(car_1);
    car_down(car_2);
    car_down(car_3);
    car_down(car_4);
    car_down(car_5);

    line_down(line_1);
    line_down(line_2);
    line_down(line_3);

    anim_id = requestAnimationFrame(repeat);
  }

  function car_down(car) {
    var car_current_top = parseInt(car.css('top'));
    if (car_current_top > container_height) {
      
      var car_left
      var collision = true       
      
      //隨機指定車子的圖片樣式
      var random = Math.floor(Math.random() * car_type.length);
      car.attr('src', car_type[random])

      while (collision){
        car_current_top = parseInt(Math.random() * (-500) - 300);
        car.css('top', car_current_top + speed);
        car_left = parseInt(Math.random() * (container_width - car_width));
        car.css('left', car_left);

        for(let i=0; i<cars.length; i++){
          if (cars[i] !== car){
            if (!crash(cars[i], car)){
              collision = false
            }else{
              collision = true
              break;
            }
          }
        }
      }
    }
    car.css('top', car_current_top + speed);
    // console.log(car_current_top);
  }

  function line_down(line) {
    var line_current_top = parseInt(line.css('top'));
    if (line_current_top > container_height) {
      line_current_top = -300;
    }
    line.css('top', line_current_top + line_speed);
  }

  // 按下restart button就用location.reload()重整頁面
  restart_button.click(function() {
    location.reload();
  });

  function stop_the_game() {
    game_over = true;
    cancelAnimationFrame(anim_id);
    cancelAnimationFrame(move_right);
    cancelAnimationFrame(move_left);
    cancelAnimationFrame(move_up);
    cancelAnimationFrame(move_down);
    restart_div.slideDown();
    // restart_word.animate({width: 'toggle' },500 );
    anime.timeline({loop: true})
      .add({
        targets: '#car_restart_word .car_letter',
        translateY: ["1.1em", 0],
        translateZ: 0,
        duration: 750,
        delay: (el, i) => 50 * i
      }).add({
        targets: '#car_restart_word',
        opacity: 0,
        duration: 2000,
        easing: "easeOutExpo",
        delay: 1000
    });

    restart_word.focus();
    setRanker();
  }

  function setRanker() {
    if (ranker[4] < parseInt(score.text())) {
      ranker[4] = parseInt(score.text())
    }

    ranker.sort(function(a, b) {
        return b - a;
    });
    
    // high_score = parseInt(score.text());
    localStorage.setItem('no1', ranker[0]);
    localStorage.setItem('no2', ranker[1]);
    localStorage.setItem('no3', ranker[2]);
    localStorage.setItem('no4', ranker[3]);
    localStorage.setItem('no5', ranker[4]);
    // console.log(ranker)

    $('#no1').text(no1);
    $('#no2').text(no2);
    $('#no3').text(no3);
    $('#no4').text(no4);
    $('#no5').text(no5);

  }


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
  

});