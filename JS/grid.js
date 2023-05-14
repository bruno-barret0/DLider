// Array com dados dos produtos
const products = [
    {
      name: 'Heiniken1',
      price: 9.99,
      image: '/images/breja.png'
    },
    {
        name: 'Heiniken1',
        price: 9.99,
        image: '/images/breja.png'
      },
      {
        name: 'Heiniken1',
        price: 9.99,
        image: '/images/breja.png'
      },
      {
        name: 'Heiniken1',
        price: 9.99,
        image: '/images/breja.png'
      },
      {
        name: 'Heiniken1',
        price: 9.99,
        image: '/images/breja.png'
      },
      {
        name: 'Heiniken1',
        price: 9.99,
        image: '/images/breja.png'
      },
      {
        name: 'Heiniken1',
        price: 9.99,
        image: '/images/breja.png'
      },
      {
        name: 'Heiniken1',
        price: 9.99,
        image: '/images/breja.png'
      },
      {
        name: 'Heiniken1',
        price: 9.99,
        image: '/images/breja.png'
      },
      {
        name: 'Heiniken1',
        price: 9.99,
        image: '/images/breja.png'
      },
      {
        name: 'Heiniken1',
        price: 9.99,
        image: '/images/breja.png'
      },
      {
        name: 'Heiniken1',
        price: 9.99,
        image: '/images/breja.png'
      },
      {
        name: 'Heiniken1',
        price: 9.99,
        image: '/images/breja.png'
      },
      {
        name: 'Heiniken1',
        price: 9.99,
        image: '/images/breja.png'
      },
      {
        name: 'Heiniken1',
        price: 9.99,
        image: '/images/breja.png'
      },
      {
        name: 'Heiniken1',
        price: 9.99,
        image: '/images/breja.png'
      },
      {
        name: 'Heiniken1',
        price: 9.99,
        image: '/images/breja.png'
      },
      {
        name: 'Heiniken1',
        price: 9.99,
        image: '/images/breja.png'
      },
      {
        name: 'Heiniken1',
        price: 9.99,
        image: '/images/breja.png'
      },
      {
        name: 'Heiniken1',
        price: 9.99,
        image: '/images/breja.png'
      },
      {
        name: 'Product 1',
        price: 9.99,
        image: '/images/breja.png'
      },
    

  ];
  
  // Seleciona o elemento do DOM onde os produtos serão exibidos
  const productGrid = document.querySelector('.product-grid');
  
  // Loop pelos produtos e cria um elemento HTML para cada um
  products.forEach(product => {
    const productItem = document.createElement('div');
    productItem.classList.add('product-item');
  
    const productImage = document.createElement('img');
    productImage.setAttribute('src', product.image);
    productImage.setAttribute('alt', product.name);
    productItem.appendChild(productImage);
  
    const productName = document.createElement('h3');
    productName.textContent = product.name;
    productItem.appendChild(productName);
    productName.classList.add('name');
  
    const productPrice = document.createElement('span');
    productPrice.classList.add('price');
    productPrice.textContent = `$${product.price.toFixed(2)}`;
    productItem.appendChild(productPrice);  
  
    productGrid.appendChild(productItem);
  });
  