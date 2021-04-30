let mic;

  function setup(){
    userStartAudio();
    mic = new p5.AudioIn();
    mic.start();
  }
  
  function draw(){
      var boca = document.getElementById("path40")
      var barba =document.getElementById('rect942')
      var bigodeDireito = document.getElementById("rect930")
      var bigodeEsquerdo = document.getElementById("rect932")
      
      var vol = mic.getLevel()
  
      boca.style.ry = vol *180
      if(boca.style.ry >= "10") {
        boca.style.ry = "8"
      }
      boca.style.rx = 15 - vol*150
      barba.style.transform = `translateY(${vol*50}px)`
      bigodeDireito.style.x = -120 + vol*30
      bigodeEsquerdo.style.x = -120 + vol*30
  }

  function mousePressed() {
    
  }
