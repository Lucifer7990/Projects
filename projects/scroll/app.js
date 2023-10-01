const nav = document.getElementsByTagName('nav')[0]
const navHight = document.getElementsByTagName('nav')[0].getBoundingClientRect().height

const link = document.querySelectorAll('.link')
const quickLink = document.querySelectorAll('.quick-link')[0]
window.addEventListener('scroll', (e)=>{
    // console.log(window.pageYOffset);
    if(window.pageYOffset > navHight){
        nav.classList.add('fixed-nav');
    }
    else{
        nav.classList.remove('fixed-nav');   
    }  
    if(window.pageYOffset > 500){
        quickLink.classList.add('link-visible');
    }
    else{
        quickLink.classList.remove('link-visible');   
    }  
})
quickLink.addEventListener('click',()=>{
    window.scrollTo({
        top:0,
        behavior:'smooth'   // smooth scroll effect
        });
})
link.forEach(item => {
    item.addEventListener('click',(e)=>{
        e.preventDefault();  // disable click on links
        const element = document.querySelector(item.getAttribute('href'))
        const position = element.offsetTop - navHight
        window.scrollTo({
            top:position,
            behavior:'smooth'   // smooth scroll effect
            });
        
    })
});