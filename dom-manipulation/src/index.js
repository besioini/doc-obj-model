// Menu data structure
var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];

//Part One
const mainEl = document.querySelector('main');
mainEl.style.backgroundColor = 'var(--main-bg)';

const h1 = document.createElement('h1');
h1.textContent = 'DOM Manipulation';
mainEl.appendChild(h1);


mainEl.classList.add('flex-ctr')

// Add a class of flex-around to topMenuEl.
const topMenuEl = document.querySelector('#top-menu');
topMenuEl.style.height = '100%'
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)'
topMenuEl.classList.add('flex-around')


menuLinks.forEach(link => {
    const aTag = document.createElement('a');
    aTag.href = link.href
    aTag.textContent = link.text

    topMenuEl.appendChild(aTag)
})

// Part 2
const subMenuEl = document.querySelector('#sub-menu');

subMenuEl.style.height = '100%'
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';
subMenuEl.classList.add('flex-around')

subMenuEl.style.position = 'absolute'
subMenuEl.style.top = 0;


const topMenuLinks = document.querySelector('#top-menu a')

topMenuEl.addEventListener('click', (e) => {
  e.preventDefault();
  if (e.target.tagName !== 'A') {
    return; 
  }
  console.log(e.target.textContent);
  topMenuLinks.classList.add('active')
})

topMenuEl.forEach(link => {
  link.classList.remove('active')
})

e.target.classList.add('active')

subMenuEl.style.top = '100%'

