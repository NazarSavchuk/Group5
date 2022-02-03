document.addEventListener('DOMContentLoaded', () => {
    const galleryBtn = document.querySelector('.gallery')
    const dropDownGallery = document.querySelector('.drop-down__gallery')
    const burgerMenuBtn = document.querySelector('.burger-menu')
    const menu = document.querySelector('.menu')
    const emailConfirmBtn = document.querySelector('.submit-btn')
    const accTitle = document.querySelectorAll('.acc-title')
    const accContent = document.querySelector('.acc-content')
    const joinUS = document.querySelector('.submit-btn')
    const email = document.querySelector('.email-input')

    galleryBtn.addEventListener('click', function(){
        dropDownGallery.classList.toggle('hidden')
    })


    if(window.innerWidth < 992){
        menu.classList.add('hidden')
    }  


    burgerMenuBtn.addEventListener('click', function(){
        menu.classList.toggle('hidden')
    })

    const acc = document.getElementsByClassName("accordion");
    let i;

    for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}
})

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  
});



