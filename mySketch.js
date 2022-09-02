var colors="d496a7--dbf9f4-e6fdff-d9d7dd-b07bac-5f7367-564787-dbcbd8-f2fdff-9ad4d6-101935-c1aba6-533b4d-f564a9-faa4bd-fae3c6-bbdbb4-fcf0cc-4392f1-ece8ef-e3ebff-e7f0ff-dc493a-d496a7-9d695a-78e0dc-8eedf7-2f2504-594e36-7e846b-a5ae9e-d0ddd7".split("-").map(a=>"#"+a)

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
	changeLightColor()

}


function draw() {
	translate(width/2,height/2);
	rectMode(CENTER);
	background("#95B8D1")
	// noStroke()
	// strokeWeight(5)
	

	fill(colors[0])
	//head
	rect(0,-170,150,130,20);
	//eyes
	
	fill(0)
	rect(-40,-170,50,30)
	rect(40,-170,50,30)
	push()
	drawingContext.shadowColor=lightColor;
	drawingContext.shadowBlur=30;
	fill(lightColor)
	
	rect(-40,-170,30,15)
	rect(40,-170,30,15)
	pop()
	rect(0,-190,160,5)
	// circle(-30,-200,25)
	// circle(30,-200,25)
	// fill(255)
	// circle(-30,-200,15)
	// circle(30,-200,15)
	//眉毛

	push()
			fill(colors[16])
		rotate(0.3+sin(frameCount/30)/10)
		rect(-30,-220,50,10);
	pop()
	push()
			fill(colors[17])
		rotate(-0.25+sin(frameCount/50)/10)
		rect(30,-210,50,10);
	pop()
	//mouth
	// fill(colors[3])
	// rect(0,-150,50,20)
	//ears
	fill(colors[18])
	rect(-85,-170,20,60,10)
	rect(85,-170,20,60,10)
	circle(-85,-185,10)
	//neck
	fill(colors[5])
	rect(0,-100,20,10)
	fill(colors[6])
	rect(0,-85,20,15)
	//body
	fill(colors[7])
	rect(0,0,150,150,20)
	//shoulder
	// push()
// 		fill(colors[8])
// 		rotate(0.01+sin(frameCount/50)/10)
			// rotateY(millis() / 1000);
// 		rect(-85,-80,40,10)
// 		fill(colors[9])
// 		circle(-100,-80,25)
// 		fill(colors[10])
// 		circle(-100,-80,15)	
// 		fill(colors[11])
// 		rect(-100,-60,10,20)
// 	fill(colors[12])
// 	rect(-100,-15,20,80,5)
// 	fill(colors[13])
// 	rect(-100,30,10,10)
// 	fill(colors[14])
// 	rect(-90,30,10,10)
// 	rect(-110,30,10,10)
// 	fill(colors[15])
// 	rect(-90,40,10,20)
// 	rect(-110,40,10,20)
		
// 	pop()
// 	push()
// 	fill(colors[8])
// 	rect(85,-80,20,10)
// 	fill(colors[9])
// 	circle(100,-80,25)
// 	pop()
	fill(colors[8])
	rect(-85,-50,20,10)
	rect(85,-50,20,10)
	fill(colors[9])
	circle(-100,-50,25)
	circle(100,-50,25)
	fill(lightColor)
	circle(-100,-50,15)
	circle(100,-50,15)
	fill(colors[11])
	rect(-100,-30,10,20)
	rect(100,-30,10,20)
	fill(colors[12])
	rect(-100,15,20,80,5)
	rect(100,15,20,80,5)
	fill(colors[13])
	rect(-100,60,10,10)
	rect(100,60,10,10)
	fill(colors[14])
	rect(-90,60,10,10)
	rect(-110,60,10,10)
	fill(colors[15])
	rect(-90,70,10,20)
	rect(-110,70,10,20)
	fill(colors[14])
	rect(90,70,10,10)
	rect(110,70,10,10)
	fill(colors[15])
	rect(90,70,10,20)
	rect(110,70,10,20)
	//leg
	fill(colors[16])
	rect(-25,85,10,20)
	rect(25,85,10,20)
	fill(colors[17])
	rect(-25,160,40,150,10)
	rect(25,160,40,150,10)
	fill(colors[18])
	rect(-25,240,20,10)
	rect(25,240,20,10)
	fill(colors[19])
	rect(-25,260,50,30,10)
	rect(25,260,50,30,10)
	
	//mouth
	stroke(0)
	strokeWeight(5);
	curve(-80,-170,-30,-140,-30,-110,-80,-80)
	stroke(0)
	strokeWeight(5);
	curve(-80,-150,-20,-120,30,-120,80,-150)
	
	//heart
	
	fill(lightColor)
	circle(0,-40,20)
	
	//equipment
	fill(colors[25])
	rect(0,-240,40,10,5)
	rect(0,-260,10,30)
	circle(0,-290,25)
	push()
	noStroke()
	fill(255)
	circle(5,-295,10)
	pop()
	
	
	if(frameCount%5==0){
		changeLightColor()
	}
}


function mousePressed(){
	changeLightColor()
}
function changeLightColor(){
	lightColor=color(random([
		"#7FFFD4",
		"#7FFF00",
		"#008B8B",
		"#9932CC",
		"#FFB6C1",
		"#000080",
		"#8B4513"
	]))
}
