var thickness,wall
var bulletSpeed,weight
var bullet
var damage
function setup() {
  createCanvas(1600,400);
   thickness = random(22,83)
  weight = random(30,52)
  bulletSpeed = random(223,321)
  wall = createSprite(1200,200,thickness,height/2)
  wall.shapeColor = color(80,80,80)
  bullet = createSprite(0,190,23,11)
  bullet.shapeColor ="white"
}

function draw() {
  background(0,0,0); 
  bullet.velocityX = bulletSpeed
  if(hasCollided(bullet,wall)) {
      bullet.velocityX = 0
      damage = 0.5*weight*bulletSpeed*bulletSpeed/(thickness*thickness*thickness);
      if(damage > 10) {
        wall.shapeColor = "red"
        
      }
      if(damage < 10) {
        wall.shapeColor = "green"
      }
  }
  drawSprites(); 
}
function hasCollided(bullet,wall) {
  bulletRightEdge = bullet.x + bullet.width
  wallLeftEdge = wall.x
  if(bulletRightEdge>=wallLeftEdge) {
    return true
  }
  return false

}
