let searchBtn =document.querySelector('.searchBtn')
let searchClose =document.querySelector('.searchClose')
let searchBox = document.querySelector('.searchBox')

searchBtn.addEventListener('click',()=>{
    searchBox.classList.add('active')
    searchBtn.classList.add('active')
    searchClose.classList.add('active')
})
searchClose.addEventListener('click',()=>{
    searchBox.classList.remove('active')
    searchBtn.classList.remove('active')
    searchClose.classList.remove('active')
})

