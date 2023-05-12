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

  const painel = document.createElement('buttom');
  painel.href = 'https://www.facebook.com/Liderbebidas.oficial/';
  painel.taget = '_blank';
  const imagemFacebook = document.createElement('img');
  imagemFacebook.src = './images/facebookStatic.png';
  imagemFacebook.alt = '';
  painel.appendChild(imagemFacebook);

  const painel2 = document.createElement('buttom');
  const imagemInstagram = document.createElement('img');
  imagemInstagram.src = './images/instaStatic.png';
  imagemInstagram.alt = '';
  painel2.appendChild(imagemInstagram);

  const painel3 = document.createElement('buttom');
  const imagemtelefone = document.createElement('img');
  imagemtelefone.src = './images/telcontato.png';
  imagemtelefone.alt = '';
  painel3.appendChild(imagemtelefone);

  const painel4 = document.createElement('buttom');
  const imagemEmail = document.createElement('img');
  imagemEmail.src = './images/mailcontato.png'
  imagemEmail.alt = '';
  painel4.appendChild(imagemEmail);


  
footer.appendChild(contatos);
footer.appendChild(painel); 
footer.appendChild(painel2);
footer.appendChild(painel3);
footer.appendChild(painel4);





 