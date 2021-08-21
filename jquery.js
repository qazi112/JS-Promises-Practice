$(function(){
    var dis = true;

    console.log('Get Ready');
    // blur and focus functions are for input fields when get clicked and release focus
    $("input").focus(function(){
        $(this).css("background-color", "#cccccc");
    });
    $('input').blur(function(){
        $(this).css('background-color','#ffffff');
    });
    // =============================
    // $(selector).on('event', function(){})
    $('p').on('click',()=>{
        alert('Clicked On!')
    });

    $("p").on({
        mouseenter: function(){
          $(this).css("background-color", "lightgray");
        },
        mouseleave: function(){
          $(this).css("background-color", "lightblue");
        },
        click: function(){
          $(this).css("background-color", "yellow");
        }
      });

      $('#test-btn').on('click',()=>{
        if(dis){
            $('div.red').fadeIn();
            $('div.blue').fadeIn('slow');
            $('div.yellow').fadeIn(3000);
            dis = false;

        }else{
            $('div.red').fadeOut();
            $('div.blue').fadeOut('slow');
            $('div.yellow').fadeOut(3000);
            dis = true;
        }
      });


    //   Playing with ul and li
    var ul = document.getElementsByClassName('my-ul-class')[0];

    for(var i = 0; i <= 10 ; ++i){
        let li = document.createElement('li');
        li.setAttribute('id','test'+i);
        li.appendChild(document.createTextNode('Test'));
        ul.appendChild(li);
    }

  });