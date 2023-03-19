
const menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];

const mainEl = document.querySelector('main');
console.log(mainEl)

mainEl.style.backgroundColor = 'var(--main-bg)';

mainEl.innerHTML = '<h1>SEI Rocks!</h1>'

mainEl.classList.add('flex-ctr');

const topMenuEl = document.getElementById('top-menu');
console.log(topMenuEl)

topMenuEl.style.height = '100%';

topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';

topMenuEl.classList.add('flex-around');

  var a = document.createElement('a');
      var linkText = document.createTextNode('about');
      a.appendChild(linkText);
      a.text = 'about';
      a.href = '/about';
      topMenuEl.appendChild(a);

  var a = document.createElement('a');
      var linkText = document.createTextNode('catalog');
      a.appendChild(linkText);
      a.text = 'catalog';
      a.href = '/catalog';
      topMenuEl.appendChild(a);

  var a = document.createElement('a');
      var linkText = document.createTextNode('orders');
      a.appendChild(linkText);
      a.text = 'orders';
      a.href = '/orders';
      topMenuEl.appendChild(a);

  var a = document.createElement('a');
      var linkText = document.createTextNode('account');
      a.appendChild(linkText);
      a.text = 'account';
      a.href = '/account';
      topMenuEl.appendChild(a);            


  

