const pai = document.getElementById('pai');

const menuSuperior = document.createElement('div');
menuSuperior.id = 'menuSuperior';

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

pai.appendChild(menuSuperior);

// criar o elemento HTML para o footer
const footer = document.createElement('div');
footer.id = 'footer';

// criar os elementos HTML para os botões de redes sociais
const buttonContainer = document.createElement('div');
buttonContainer.id = 'button-container';
buttonContainer.style.display = 'flex';
buttonContainer.style.justifyContent = 'center';
buttonContainer.style.marginTop = '20px';

const buttonImages = [
  'images/whatsapp.png',
  'images/facebook.png',
  'images/instagram.png'
];

const buttonLinks = [
  'https://wa.me/41998919614',
  'https://www.facebook.com/Liderbebidas.oficial/',
  'https://www.instagram.com/leonardo.manique/'
];

for (let i = 0; i < buttonImages.length; i++) {
  const button = document.createElement('a');
  button.style.margin = '0 10px';
  const link = document.createElement('a');
  link.href = buttonLinks[i];
  link.target = '_blank';
  const img = document.createElement('img');
  img.src = buttonImages[i];
  img.classList.add('button-image');
  link.appendChild(img);
  button.appendChild(link);
  buttonContainer.appendChild(button);
  img.addEventListener('mouseover', function() {
    img.classList.add('enlarge');
  });
  img.addEventListener('mouseout', function() {
    img.classList.remove('enlarge');
  });
}

// adicionar os botões ao footer
footer.appendChild(buttonContainer);
document.body.appendChild(footer);


