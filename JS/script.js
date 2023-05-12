const menuSuperior = document.getElementById('menuSuperior');

const logo = document.createElement('div');
  logo.className = 'logo';
  const imagem = document.createElement('img');
  imagem.src = './images/logo.png';
  imagem.alt = '';
  imagem.className = 'logoimg';
  logo.appendChild(imagem);

const barraDePesquisa = document.createElement('div');
  barraDePesquisa.className = 'barraDePesquisa';

const lupa = document.createElement('div');
  lupa.className = 'lupa';

const menuDireito = document.createElement('div');
  menuDireito.className = 'menuDireito'; 
  
menuSuperior.appendChild(logo);
menuSuperior.appendChild(barraDePesquisa);   
menuSuperior.appendChild(lupa);  
menuSuperior.appendChild(menuDireito); 



//subistituir a img do bootstrap por um botão com img
/*
const filtros = document.getElementById('filtros')
const filtroMenu = document.createElement('filtroMenu')

const icone = document.createElement('i')
  icone.className = 'bi bi-filter-circle-fill';
  icone.style.fontSize = '147%';
filtroMenu.appendChild(icone);  
*/

const produtos = document.getElementById('produtos')

//mesma coisa que "filtros"
/*
const whats = document.getElementById('whats')
*/

const footer = document.getElementById('footer');

const contatos = document.createElement('div');
  contatos.className = 'contatos';

  const painel = document.createElement('div');
  painel.className = 'Painel';
  const imagemFacebook = document.createElement('img');
  imagemFacebook.src = './images/facebookStatic.png';
  imagemFacebook.alt = '';
  imagemFacebook.className = 'facebookStatic';
  painel.appendChild(imagemFacebook);

  const painel1 = document.createElement('div');
  painel1.className = 'painel1';
  const imagemInstagram = document.createElement('img');
  imagemInstagram.src = './images/instaStatic.png';
  imagemInstagram.alt = '';
  imagemInstagram.className = 'InstaStatic';
  painel1.appendChild(imagemInstagram);

  const painel2 = document.createElement('div');
  painel2.className = 'painel2';
  const imagemtelefone = document.createElement('img');
  imagemtelefone.src = './images/telcontato.png';
  imagemtelefone.alt = '';
  imagemtelefone.className = 'telStatic';
  painel2.appendChild(imagemtelefone);

  const painel3 = document.createElement('div');
  painel3.className ='painel3';
  const imagemEmail = document.createElement('img');
  imagemEmail.src = './images/mailcontato.png'
  imagemEmail.alt = '';
  imagemEmail.className = 'mailStatic';
  painel3.appendChild(imagemEmail);


  
footer.appendChild(contatos);
footer.appendChild(painel); 
footer.appendChild(painel1); 
footer.appendChild(painel2);
footer.appendChild(painel3)





 