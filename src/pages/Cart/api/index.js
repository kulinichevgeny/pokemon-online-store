import api from "../../../api/config";

export const getCart = () => api.get('cart');

export const addCartItem = (body) => api.post('cart/item', body);

export const deleteCartItem = (id) => api.delete(`cart/item/${id}`);

export const createOrder = (body) => api.post('order', body);

export const updateItemQuantity = (body) => api.patch('cart/item', body);