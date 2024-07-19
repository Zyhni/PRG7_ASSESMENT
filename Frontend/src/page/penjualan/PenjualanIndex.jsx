import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { listTransaksi, getTotalTransaksi } from "../../util/PenjualanService";
import { formatDate } from "../../util/FormatDate";
import {formatRupiah} from "../../util/FormatRupiah"

export default function PenjualanIndex() {
  const [transaksis, setTransaksi] = useState([]);
  const [totals, setTotals] = useState(0);

  useEffect(() => {
    getTotalTransaksi()
      .then((response) => {
        setTotals(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    listTransaksi()
      .then((response) => {
        setTransaksi(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="container my-4">
      <h2 className="text-left mb-4">Transaksi Index</h2>

      <div className="row mb-3">
        <div className="col">
          <Link className="btn btn-primary me-1" role="button" to="/penjualan/create">
            Create
          </Link>
        </div>
        <div className="col text-end">
          <strong>Total Harga Pesanan : {formatRupiah(totals)}</strong>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <table className="table">
            <thead>
              <tr>
                <th>No</th>
                <th>Nama Obat</th>
                <th>Harga Obat</th>
                <th>Qty</th>
                <th>Total</th>
                <th>Tanggal</th>
              </tr>
            </thead>
            <tbody>
              {transaksis.map((transaksi, index) => (
                <tr key={transaksi.idTransaksi}>
                  <td>{index + 1}</td>
                  <td>{transaksi.namaObat}</td>
                  <td>{formatRupiah(transaksi.hargaObat)}</td>
                  <td>{transaksi.qtyObat}</td>
                  <td>{formatRupiah(transaksi.hargaTotal)}</td>
                  <td>{formatDate(transaksi.tanggal)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
