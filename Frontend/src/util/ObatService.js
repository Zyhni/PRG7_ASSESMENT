import axios from "axios";

const BASE_URL = 'http://localhost:8080/obat';

export const listObat = () => axios.get(BASE_URL + '/getAllObat');
export const getObatById = (idObat) => axios.get(`${BASE_URL}/getObatById/${idObat}`);
export const saveObat = (obat) => axios.post(BASE_URL + '/saveObat',obat);
export const updateObat = (obat) => axios.post(BASE_URL + '/updateObat',obat);
export const updateStatus = (idObat) => axios.post(`${BASE_URL}/updateStatus/${idObat}`);