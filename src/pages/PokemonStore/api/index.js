import api from "../../../api/config";

export const getPokemons = (pageNumber) => api.get(`/products?page=${pageNumber}&limit=20`);