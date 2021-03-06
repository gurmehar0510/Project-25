class Paper{
    constructor(x,y,r){

        var options = {
            restitution : 0.3,
            friction : 5,
            density : 1.2
        }

        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(this.x,this.y,(this.r-20)/2,options);
        this.image = loadImage("paper.png");
        World.add(world,this.body);
    }

    display(){
         var pos = this.body.position;
         push();
         translate(pos.x,pos.y);
         rectMode(CENTER);
         strokeWeight(3);
         stroke("black");
         fill("gray");
         image(this.image,0,0,this.r,this.r);
         pop();
    }
}