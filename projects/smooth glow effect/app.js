const glowBall = document.getElementById('glow-ball')
window.addEventListener('mousemove',(e)=>{ 
    glowBall.style.top = (e.clientY - 125)+'px'
    glowBall.style.left = (e.clientX-125)+'px'
})