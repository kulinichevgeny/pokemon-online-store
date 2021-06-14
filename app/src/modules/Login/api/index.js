import api from "../../../api/config";

export const signIn = (body) => api.post('auth/signIn', body);