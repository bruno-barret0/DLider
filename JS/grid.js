const products = [];

function addProduct(name, price, image) {
  const newProduct = {
    name,
    price,
    image
  };
  products.push(newProduct);
}
addProduct('Heiniken1', 9.99, '/images/breja.png');
addProduct('Product 1', 9.99, '/images/breja.png');
addProduct('Product 2', 8.99, '/images/breja.png');
addProduct('Product 2', 8.99, '/images/breja.png');
addProduct('Product 2', 8.99, '/images/breja.png');
addProduct('Product 2', 8.99, '/images/breja.png');
addProduct('Product 2', 8.99, '/images/breja.png');
addProduct('Product 2', 8.99, '/images/breja.png');
addProduct('Product 2', 8.99, '/images/breja.png');
addProduct('Product 2', 8.99, '/images/breja.png');
addProduct('Product 2', 8.99, '/images/breja.png');
addProduct('Product 2', 8.99, '/images/breja.png');
addProduct('Heiniken1', 9.99, '/images/breja.png');
addProduct('Product 1', 9.99, '/images/breja.png');
addProduct('Product 2', 8.99, '/images/breja.png');
addProduct('Product 2', 8.99, '/images/breja.png');
addProduct('Product 2', 8.99, '/images/breja.png');
addProduct('Product 2', 8.99, '/images/breja.png');
addProduct('Product 2', 8.99, '/images/breja.png');
addProduct('Product 2', 8.99, '/images/breja.png');
addProduct('Product 2', 8.99, '/images/breja.png');
addProduct('Product 2', 8.99, '/images/breja.png');
addProduct('Product 2', 8.99, '/images/breja.png');
addProduct('Product 2', 8.99, '/images/breja.png');

  

const productGrid = document.querySelector('.product-grid');

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
  