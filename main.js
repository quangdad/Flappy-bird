var canvas = document.getElementById('gamezone');
var context = canvas.getContext('2d');
var scoreshow = document.getElementById('score');

var birdImg = new Image();
var hinhNenChinh = new Image();
var ongTren = new Image();
var ongDuoi = new Image();
birdImg.src = "images/gaycat3a.png";
hinhNenChinh.src = "images/nenchinh.png";
ongDuoi.src = "images/ongduoi.png";
ongTren.src = "images/ongtren.png";

var score=0;
var khoangcach2ong = 140;
var khoangcachdenongduoi;
var bird = {
    x: hinhNenChinh.width/5,
    y: hinhNenChinh.height/2
}
var ong=[];
ong[0]={
    x:canvas.width,
    y:0
}
function run(){
    context.drawImage(hinhNenChinh,0,0);
    context.drawImage(birdImg, bird.x, bird.y);

    for(var i=0; i<ong.length; i++){
        khoangcachdenongduoi=ongTren.height+khoangcach2ong;
        context.drawImage(ongTren, ong[i].x, ong[i].y);

        context.drawImage(ongDuoi, ong[i].x, ong[i].y+khoangcachdenongduoi)

        ong[i].x-=3;
        if(ong[i].x==canvas.width/3){
            ong.push({
                x:canvas.width,
                y:Math.floor(Math.random()*ongTren.height)-ongTren.height
            })
        }
        if(ong[i].x==bird.x)score++;
        if(bird.y+birdImg.height==canvas.height||
            bird.x+birdImg.width>=ong[i].x&&bird.x<=ong[i].x+ongTren.width&&
            (bird.y<=ong[i].y+ongTren.height||bird.y+birdImg.height>=ong[i].y+khoangcachdenongduoi))
            {
                return;
            }
    }
    scoreshow.innerHTML="score:"+score;
    bird.y+=3;
    requestAnimationFrame(run);   
}
document.addEventListener("keypress", function(){
    bird.y-=50;
})
document.addEventListener("click", function(){
    bird.y-=50;
})
run();  


