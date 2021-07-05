const ulList:HTMLUListElement = document.querySelector('.header__nav-list')
const ulLink = document.querySelectorAll('.header__nav-list-link')
const ulImg = document.querySelectorAll('.header__nav-list-link')
const headerRight = document.querySelector('.header__right')
const rightLink:HTMLLinkElement = document.querySelector('.header__right-link')
const rightIcon:HTMLButtonElement = document.querySelector('.header__right-icon')
const openButton = document.querySelector('.header__right-open')
const closeButton =document.querySelector('.close__button')

openButton.addEventListener('click',()=>{
  ulList.style.transform = 'translate(0%)'
  rightLink.style.display = 'block'
  rightIcon.style.display = 'block'
  ulList.appendChild(rightLink)
  ulList.appendChild(rightIcon)
})

closeButton.addEventListener('click', ()=>{
  ulList.style.transform = 'translate(100%)'
})
