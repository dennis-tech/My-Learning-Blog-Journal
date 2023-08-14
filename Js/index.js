import  { getBlogsHtml, handleImgClick, hamburger, navMenu } from './utilis.js'; 


const render = ()=> document.getElementById('blogs').innerHTML = getBlogsHtml();
render();



// getting the image from the data-img attribute

document.addEventListener('click', function(e){
    if(e.target.dataset.img){
        handleImgClick(e.target.dataset.img);
    }
    
})


// hamburger menu

hamburger.addEventListener('click', ()=>{
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () =>{
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));






