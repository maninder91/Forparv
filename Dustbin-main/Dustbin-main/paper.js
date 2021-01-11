/*class Paper
{
    constructor()
    {
        var option=
        {
            isStatic:false,
            restitution:0.3,
            friction:1,
            density:1
        }
        this.body=Bodies.circle(200,200,30,option);
        this.body.radius=30;
        World.add(world,this.body);
    }
    display()
    {
        var paperpos = this.body.position;
        push()
        translate(paperpos.x,paperpos.y)
        rectMode(CENTER)
        strokeWeight(3)
        fill("red")
        ellipseMode(RADIUS)
        ellipse(0,0,30,30)
         pop()
    }
} */
class Paper
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0.3,
			friction:0.5,
			density:1.2

			
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, this.r/2, options)
		World.add(world, this.body);

	}
	display()
	{
			
			var paperpos=this.body.position;		

			push()
			translate(paperpos.x, paperpos.y);
			rectMode(CENTER)
			strokeWeight(3);
			fill("red")
			ellipse(0,0,this.r, this.r);
			pop()
			
	}

}
