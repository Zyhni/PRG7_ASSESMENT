import axios from "axios";

const BASE_URL = 'http://localhost:8080/penjualan';

export const listTransaksi = () => axios.get(BASE_URL + '/getAllTransaksi');
export const saveTransaksi = (penjualanObat) => axios.post(BASE_URL + '/saveTransaksi',penjualanObat);
export const getTotalTransaksi = () => axios.get(BASE_URL + '/getTotalTransaksi');