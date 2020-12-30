class Rope{
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX=offsetX;
        this.offsetY=offsetY;
        var options = {
            bodyA:body1,
            bodyB:body2,
            poinB:{x:this.offsetX,y:offsetY}
        }
        
        this.chain = Constraint.create(options);
        World.add(world, this.chain)
    }
    display(){
      push  ();
        var body1=this.chain.bodyA.position;
        var body2=this.chain.bodyB.position;
        strokeWeight(4);
        line (body1.x, body1.y,body2.x,body2.y)
    pop();
    }
    
        
    }