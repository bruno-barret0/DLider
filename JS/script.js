const pai = document.getElementById('pai');
const body = document.body;

const menuSuperior = document.createElement('div');
menuSuperior.id = 'menuSuperior';
menuSuperior.style.display = 'flex';
menuSuperior.style.justifyContent = 'space-between';


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
menuDireito.style.display = 'flex';
menuDireito.style.justifyContent = 'flex-end';

body.appendChild(menuSuperior);

const contatosSuperior = document.getElementById('CSDireita');
const buttonSuperior = document.createElement('div');
buttonSuperior.className = 'button-containerD';
buttonSuperior.style.display = 'flex';
buttonSuperior.style.justifyContent = 'right';
buttonSuperior.style.marginTop = '0';

const buttonImagesD = [
  'images/whatsapp.png',


];

const buttonLinksD = [
  'https://api.whatsapp.com/send/?phone=41998919614&text&type=phone_number&app_absent=0',
];

for (let i = 0; i < buttonImagesD.length; i++) {
  const buttonD = document.createElement('a');
  buttonD.style.margin = '0';
  const linkD = document.createElement('a');
  linkD.href = buttonLinksD[i];
  linkD.target = '_blank';
  const imgD = document.createElement('img');
  imgD.src = buttonImagesD[i];
  imgD.classList.add('button-imageD');
  linkD.appendChild(imgD);
  buttonD.appendChild(linkD);
  buttonSuperior.appendChild(buttonD);
  imgD.addEventListener('mouseover', function() {
    imgD.classList.add('enlarge');
  });
  imgD.addEventListener('mouseout', function() {
    imgD.classList.remove('enlarge');
  });
 
}


contatosSuperior.appendChild(buttonSuperior);
body.appendChild(contatosSuperior);
menuSuperior.appendChild(contatosSuperior);


menuSuperior.appendChild(logo);
menuSuperior.appendChild(barraDePesquisa);
menuSuperior.appendChild(lupa);
menuSuperior.appendChild(menuDireito);
pai.appendChild(menuSuperior);

// criar o elemento HTML para o footer
const footer = document.createElement('div');
footer.id = 'footer';
const textoFooter = document.createElement('p');
textoFooter.className = 'textoFooter'
textoFooter.innerHTML = ' Horário de funcionamento: <br> Segunda-feira	10:00–20:00; <br> Terça-feira	08:00–00:00; <br> Quarta-feira	08:00–00:00; <br> Quinta-feira	08:00–00:00; <br> Sexta-feira	08:00–02:00; <br> Sábado 08:00–02:00; <br> Domingo 10:00-20:00. ';
footer.appendChild(textoFooter);


const textoFooter1 = document.createElement('p');
textoFooter1.className = 'textoFooter1'
textoFooter1.textContent = 'Endereço: R. José Domingues, 11 - Roça Grande, Colombo - PR, 83402-620';
footer.appendChild(textoFooter1);

const textoFooter2 = document.createElement('p');
textoFooter2.className = 'textoFooter2'
textoFooter2.textContent = 'Telefone: (41) 99891-9614';
footer.appendChild(textoFooter2);


// criar os elementos HTML para os botões de redes sociais
const buttonContainer = document.createElement('div');
buttonContainer.id = 'button-container';
buttonContainer.style.display = 'flex';
buttonContainer.style.justifyContent = 'center';
buttonContainer.style.marginTop = '20px';

const buttonImages = [
'images/facebook.png',
'images/instagram.png',
];

const buttonLinks = [
'https://www.facebook.com/Liderbebidas.oficial/',
'https://www.instagram.com/liderbebidas.oficial/?fbclid=IwAR1QfCzVdGr8Tkaa7O6rdCpzgMn7EzTQT7qen4BM6PYhWBp9HTAxiifKyek',
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

// alinhar o menu direito no canto direito
menuDireito.style.marginLeft = 'auto';
