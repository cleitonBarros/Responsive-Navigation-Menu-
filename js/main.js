let searchBtn =document.querySelector('.searchBtn')
let searchClose =document.querySelector('.searchClose')
let searchBox = document.querySelector('.searchBox')

let navigation  = document.querySelector('.navigation')
let menuToggle = document.querySelector('.menuToggle')
let header = document.querySelector('header')

searchBtn.addEventListener('click',()=>{
    searchBox.classList.add('active')
    searchBtn.classList.add('active')
    searchClose.classList.add('active')
    menuToggle.classList.add('hide')
})
searchClose.addEventListener('click',()=>{
    searchBox.classList.remove('active')
    searchBtn.classList.remove('active')
    searchClose.classList.remove('active')
    menuToggle.classList.remove('hide')
})
menuToggle.addEventListener('click',()=>{
    header.classList.toggle('open')
    searchBox.classList.remove('active')
    searchBtn.classList.remove('active')
    searchClose.classList.remove('active')
})
