import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { listObat, updateStatus } from "../../util/ObatService";
import Swal from "sweetalert2";

export default function ObatIndex() {
  const [obats, setObats] = useState([]);

  useEffect(() => {
    listObat()
      .then((response) => {
        setObats(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  function handleDelete(idObat) {
    Swal.fire({
      title: "Apakah anda yakin?",
      text: "Ingin mengubah status data ini",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        try {
          updateStatus(idObat);
          Swal.fire({
            title: "Sukses!",
            text: "data anda sudah berhasil di ubah.",
            icon: "success",
          }).then(() => {
            window.location.reload();
            console.log(idObat);
          });
        } catch (error) {
          console.error(error);
          Swal.fire({
            title: "Error!",
            text: "Terjadi error saat mengubah status data.",
            icon: "error",
          });
        }
      }
    });
  }

  return (
    <div className="container my-4">
      <h2>Obat Index</h2>
      <div className="row mb-3">
        <div className="col">
          <Link className="btn btn-primary me-1" role="button" to="/obat/create">
            Create
          </Link>
        </div>
        <div className="col"></div>

        <table className="table">
          <thead>
            <tr>
              <th>No</th>
              <th>Nama</th>
              <th>Tipe</th>
              <th>Indikasi</th>
              <th>Stok</th>
              <th>Stok Min</th>
              <th>Harga</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {obats.map((obat, index) => (
              <tr key={obat.idObat}>
                <td>{index + 1}</td>
                <td>{obat.namaObat}</td>
                <td>{obat.tipeObat}</td>
                <td>{obat.indikasi}</td>
                <td>{obat.stok}</td>
                <td>{obat.stokMin}</td>
                <td>{obat.hargaObat}</td>
                <td style={{ width: "10px", whiteSpace: "nowrap" }}>
                  <Link className="btn btn-primary btn-sm me-1" to={`/obat/update/${obat.idObat}`}>
                    Edit
                  </Link>
                  <button type="button" className="btn btn-danger btn-sm" onClick={() => handleDelete(obat.idObat)}>
                    UpdateStat
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
