const showButton = document.querySelector('#navigation .nav-icon')
const navContent = document.querySelector('#nav-content')
const hideButton = document.querySelector('#nav-content .close-btn')
const navLinks = document.querySelectorAll('#nav-content .wrapper ul li a')
const scrollButton = document.querySelector('.scroll-top')

if(scrollButton) {
    window.addEventListener('scroll', ()=> {
        if(pageYOffset > (window.innerHeight * 1.2)){
            scrollButton.style.display = 'flex'
        } else {
            scrollButton.style.display = 'none'
        }
    })
    scrollButton.addEventListener('click', ()=> {
        window.scrollTo(0, 0)
    })
}

showButton.addEventListener('click', ()=>{
    navContent.classList.add('show');
    document.body.style.overflow='hidden'
})

hideButton.addEventListener('click', ()=> {
    navContent.classList.remove('show')
    document.body.style.overflow='auto'
})
navLinks.forEach( link => {
    link.addEventListener('click', ()=> {
        navContent.classList.remove('show')
        document.body.style.overflow='auto'
    })
})