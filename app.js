const field = document.querySelector('.field');
const ball = document.querySelector('.circle');


field.addEventListener('click',(e) => {
    

    
    // console.log(width/2);
    // console.log(height/2);
    
    const newX = (e.clientX - ball.offsetLeft - ball.offsetWidth/2);
    const newY = (e.clientY - ball.offsetTop - ball.offsetHeight/2);
    
    ball.style.transform = `translate(${newX}px, ${newY}px)`;
});
