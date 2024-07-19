import axios from "axios";

const BASE_URL = 'http://localhost:8080/layanan';

export const listLayanan = () => axios.get(BASE_URL + '/getAllLayanan');
export const getLayananById = (idLayanan) => axios.get(`${BASE_URL}/getLayananById/${idLayanan}`);
export const saveLayanan = (layanan) => axios.post(BASE_URL + '/saveLayanan',layanan);
export const updateLayanan = (layanan) => axios.post(BASE_URL + '/updateLayanan',layanan);
export const deleteLayanan = (idLayanan) => axios.post(`${BASE_URL}/deleteLayanan/${idLayanan}`);