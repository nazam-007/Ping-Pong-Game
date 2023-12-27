// let table=document.getElementById("ping-pong-table");
// let ball=document.getElementById("ball");
// let paddle=document.getElementById("paddle");
console.log("Hello");

document.addEventListener("DOMContentLoaded", () => {
    let table=document.getElementById("ping-pong-table");
    let ball=document.getElementById("ball");
    let paddle=document.getElementById("paddle");
    let ballX=50;
    let ballY=50;
    let dx=2;   // displacement factor in x direction
    let dy=2;   // displacement factor in x direction
    ball.style.left=`${ballX}px`;
    ball.style.top=`${ballY}px`;
    setInterval( function exec(){
        ballX += dx;
        ballY += dy;
        ball.style.left=`${ballX}px`;
        ball.style.top=`${ballY}px`;
        // if(ballX > 675 || ballX <= 0)
        // {
        //     dx *= -1;
        // }
        // if(ballY > 375 || ballY <= 0)
        // {
        //     dy *= -1;
        // }


        //collision of ball and paddle
        if(ballX>table.offsetWidth-ball.offsetWidth || ballX <=0)
        {
            dx *= -1;
        }
        if(ballY>table.offsetHeight-ball.offsetHeight || ballY <=0)
        {
            dy *= -1;
        }

        if(ballX < paddle.offsetLeft+paddle.offsetWidth && 
            ballY > paddle.offsetTop && 
            ballY+ball.offsetHeight<paddle.offsetTop+paddle.offsetHeight)

        {
            dx*=-1;
        }

    },1);
    
    let paddleY=0;
    let dpy=5; 
    document.addEventListener("keydown",(event)=>{
        event.preventDefault();  //prevents the execution of default event behaviour
        if(event.keyCode==38 && paddleY>0){
            paddleY+=(-1)*dpy;
            
        }else if(event.keyCode==40 && paddleY < table.offsetHeight-paddle.offsetHeight){
            paddleY+=dpy;
        }
       paddle.style.top=`${paddleY}px`;
    });


    // Paddle movement by mouse
    document.addEventListener("mousemove", (event) => {
        if(event.clientX > table.offsetLeft + (table.offsetWidth/2)) return;
        let mouseDistanceFromTop = event.clientY; // this is the distance of the mouse point from the top of the screen
        let distanceOfTableFromTop = table.offsetTop;
        let mousePointControl = mouseDistanceFromTop - distanceOfTableFromTop - paddle.offsetHeight/2;
        paddleY = mousePointControl;
        if(paddleY <= 0 || paddleY > table.offsetHeight - paddle.offsetHeight) return; // if bottom of the paddle touches bottom of the table return
        paddle.style.top = `${paddleY}px`;
    })
    
});







