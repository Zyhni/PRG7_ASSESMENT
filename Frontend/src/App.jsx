import { useState } from "react";
import Navbar from "./component/layout";
import Home from "./page/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./page/NotFound";
import LayananIndex from "./page/layanan/LayananIndex";
import LayananCreate from "./page/layanan/LayananCreate";
import LayananUpdate from "./page/layanan/LayananUpdate";
import TransaksiIndex from "./page/transaksi/TransaksiIndex";
import TransaksiCreate from "./page/transaksi/TransaksiCreate";
import LaporanIndex from "./page/laporan/LaporanIndex";

import ObatIndex from "./page/obat/ObatIndex";
import ObatCreate from "./page/obat/ObatCreate";
import ObatUpdate from "./page/obat/ObatUpdate";
import PenjualanIndex from "./page/penjualan/PenjualanIndex";
import PenjualanCreate from "./page/penjualan/PenjualanCreate";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/layanan" element={<LayananIndex />} />
        <Route path="/layanan/create" element={<LayananCreate />} />
        <Route path="/layanan/update/:idLayanan" element={<LayananUpdate />} />
        <Route path="/transaksi" element={<TransaksiIndex />} />
        <Route path="/transaksi/create" element={<TransaksiCreate />} />
        <Route path="/laporan" element={<LaporanIndex />} />
        <Route path="*" element={<NotFound />} />

        <Route path="/obat" element={<ObatIndex />} />
        <Route path="/obat/create" element={<ObatCreate />} />
        <Route path="/obat/update/:idObat" element={<ObatUpdate />} />
        <Route path="/penjualan" element={<PenjualanIndex />} />
        <Route path="/penjualan/create" element={<PenjualanCreate />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
