import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { listTransaksi, getTotalTransaksi } from "../../util/TransaksiService";
import { formatDate } from "../../util/FormatDate";
import {formatRupiah} from "../../util/FormatRupiah"

export default function TransaksiIndex() {
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
          <Link className="btn btn-primary me-1" role="button" to="/transaksi/create">
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
                <th>Nama Layanan</th>
                <th>Harga Layanan</th>
                <th>Qty</th>
                <th>Total</th>
                <th>Tanggal</th>
              </tr>
            </thead>
            <tbody>
              {transaksis.map((transaksi, index) => (
                <tr key={transaksi.idTransaksi}>
                  <td>{index + 1}</td>
                  <td>{transaksi.namaLayanan}</td>
                  <td>{formatRupiah(transaksi.hargaLayanan)}</td>
                  <td>{transaksi.qty}</td>
                  <td>{formatRupiah(transaksi.total)}</td>
                  <td>{formatDate(transaksi.tanggalTransaksi)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
