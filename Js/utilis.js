import blogsData  from './data.js';

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');



function handleImgClick(image){
    
    const targetImageObject = blogsData.filter(function(blog){
        return blog.title === image;
    })[0];
    console.log(targetImageObject.img); 
}



function getBlogsHtml(){
    let blogsHtml = ``;

    blogsData.forEach(blog=>{
        const { img, date, title, content } = blog;
    blogsHtml += `
        <div class="blogs__one">
                <img id="blog__img" src="${img}" alt="blog" data-img="${title}">
                <p class="blogs__one__date">${date}</p>
                <h2 class="blogs__one__h2">${title}</h2>
                <p class="blogs__one__paragraph">${content}</p>

        </div>
      `
    })
    return blogsHtml;
}

export { getBlogsHtml, handleImgClick, hamburger, navMenu }