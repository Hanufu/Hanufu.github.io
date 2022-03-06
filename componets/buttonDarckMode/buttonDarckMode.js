document.addEventListener("DOMContentLoaded", () => {

    let box = document.getElementById('box');

    if(localStorage.getItem("estadoLampada") == null){
        localStorage.setItem("estadoLampada", "false");

    }else if(localStorage.getItem("estadoLampada") == 'true'){
        box.style.backgroundColor = 'green';
        box.style.flexDirection = 'row-reverse';
        document.body.style.backgroundColor = '#0f0f0f';
        box.style.backgroundImage = 'url("assets/button/moon.svg")'
    }else if(localStorage.getItem("estadoLampada") == 'false'){
        box.style.backgroundImage = 'url("assets/button/sun.svg")'
    }
});



function ligaDesliga(){
    let box = document.getElementById('box');

    //lampada ligada
      if(localStorage.getItem("estadoLampada") == 'false'){
        localStorage.setItem("estadoLampada", 'true');
        
        box.style.backgroundColor = 'green';
        box.style.flexDirection = 'row-reverse';
        document.body.style.backgroundColor = '#0f0f0f';

        box.style.backgroundImage = 'url("assets/button/moon.svg")'
    //lampada desligada
      }else if(localStorage.getItem('estadoLampada') == 'true'){
        localStorage.setItem("estadoLampada", 'false');

        box.style.backgroundColor = 'gray';
        box.style.flexDirection = 'row';
        document.body.style.backgroundColor = '#FAF7FD';

        box.style.backgroundImage = 'url("assets/button/sun.svg")'
      }
  }