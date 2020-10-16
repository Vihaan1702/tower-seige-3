class Block{

  constructor(x, y, width, height) {

      var options = {
          restitution :0.05,
          friction :0.2,
          density: 0.1
      }

      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }

    score(){

      if(this.visibility < 0 && this.visibilty > - 105){
        score++
      }
    }

    blocks1.score();
    blocks2.score();
    blocks3.score();
    blocks4.score();
    blocks5.score();
    blocks6.score();
    blocks7.score();
    blocks8.score();
    blocks9.score();


    display(){
     
      if(this.body.speed < 5){
      push();
      translate(this.body.position.x, this.body.position.y);
      
      rectMode(CENTER);
      rect(0, 0, this.width, this.height);

      pop();
      }
      else{

          World.remove(world, this.body);
  
          push();
          
          this.visibilty = this.visibilty-5;
          tint(255, this.visibilty);
          
          rect(0, 0, this.width, this.height);

          pop();
      }

  }


  }



  
     
   
  
    
   
  