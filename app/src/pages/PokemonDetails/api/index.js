import api from "../../../api/config";

export const getPokemonDetails = (id) => api.get(`products/${id}`);