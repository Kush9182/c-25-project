class Paper{
    constructor(x,y,r){
      var options =  {
        density: 1.2,
      }    
      this.body=Bodies.circle(x,y,r,options);
      this.image=loadImage("paperball.png");
      this.radius=r;  
      World.add(world,this.body);
      
    }
    display(){
     
      imageMode(RADIUS);
      image(this.image,this.body.position.x,this.body.position.y,this.radius,this.radius)
    
    }
}