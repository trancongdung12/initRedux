import http from './http';

export async function getAllProduct() {
  return http.get('/allProducts');
}

export async function getCart() {
  return http.get('/cart');
}

export async function addToCart(data) {
  return http.post('/cart', data);
}
