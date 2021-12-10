document.addEventListener('DOMContentLoaded', () => {
    const galleryBtn = document.querySelector('.gallery')
    const dropDownGallery = document.querySelector('.drop-down__gallery')
    const burgerMenuBtn = document.querySelector('.burger-menu')
    const menu = document.querySelector('.menu')
    const emailConfirmBtn = document.querySelector('.submit-btn')


    galleryBtn.addEventListener('click', function(){
        dropDownGallery.classList.toggle('hidden')
    })


    if(window.innerWidth < 992){
        menu.classList.add('hidden')
    }  


    burgerMenuBtn.addEventListener('click', function(){
        menu.classList.toggle('hidden')
    })
})


