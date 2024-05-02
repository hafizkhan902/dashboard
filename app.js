const threedot=document.querySelector('.menu_toogler');
const hiddenmenu=document.querySelector('.toogle');
const closer=document.querySelector('.close');

threedot.addEventListener('click',()=>{
    hiddenmenu.style.display='flex';
    threedot.style.display='none'
    console.log('clicked');
})

closer.addEventListener('click',()=>{
    hiddenmenu.style.display='none';
    threedot.style.display='flex';
})