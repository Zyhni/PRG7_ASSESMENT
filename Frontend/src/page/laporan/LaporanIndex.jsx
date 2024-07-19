import React, { useEffect, useState } from "react";
import { listLaporanCountLayanan } from "../../util/TransaksiService";
import { formatRupiah } from "../../util/FormatRupiah";

export default function LaporanIndex() {
  const [laporans, setLaporans] = useState([]);

  useEffect(() => {
    listLaporanCountLayanan()
      .then((response) => {
        setLaporans(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="container my-4">
      <h2 className="text-left mb-4">Laporan Transaksi Jumlah Berdasarkan Layanan</h2>
      <div className="row mb-3"></div>

      <div className="row">
        <table className="table">
          <thead>
            <tr>
              <th>No</th>
              <th>Nama Layanan</th>
              <th>Jumlah Pesanan</th>
              <th>Total Pendapatan</th>
            </tr>
          </thead>
          <tbody>
            {laporans.map((laporan, index) => (
              <tr key={laporan.idLayanan}>
                <td>{index + 1}</td>
                <td>{laporan.namaLayanan}</td>
                <td>{laporan.jumlah}</td>
                <td>{formatRupiah(laporan.totalHarga)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
