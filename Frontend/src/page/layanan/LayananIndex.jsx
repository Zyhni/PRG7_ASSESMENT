import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { listLayanan, deleteLayanan } from "../../util/LayananService";
import Swal from "sweetalert2";

export default function LayananIndex() {
  const [layanans, setLayanans] = useState([]);

  useEffect(() => {
    listLayanan()
      .then((response) => {
        setLayanans(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  function handleDelete(idLayanan) {
    Swal.fire({
      title: "Apakah anda yakin?",
      text: "Ingin menghapus data ini",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        try {
          deleteLayanan(idLayanan);
          Swal.fire({
            title: "Sukses!",
            text: "data anda sudah berhasil di hapus.",
            icon: "success",
          }).then(() => {
            window.location.reload();
            console.log(idLayanan);
          });
        } catch (error) {
          console.error(error);
          Swal.fire({
            title: "Error!",
            text: "Terjadi error saat menghapus data.",
            icon: "error",
          });
        }
      }
    });
  }

  return (
    <div className="container my-4">
      <h2>Layanan Index</h2>
      <div className="row mb-3">
        <div className="col">
          <Link className="btn btn-primary me-1" role="button" to="/layanan/create">
            Create
          </Link>
        </div>
        <div className="col"></div>

        <table className="table">
          <thead>
            <tr>
              <th>No</th>
              <th>Nama</th>
              <th>Deskripsi</th>
              <th>Harga</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {layanans.map((layanan, index) => (
              <tr key={layanan.idLayanan}>
                <td>{index + 1}</td>
                <td>{layanan.namaLayanan}</td>
                <td>{layanan.deskripsi}</td>
                <td>{layanan.harga}</td>
                <td style={{ width: "10px", whiteSpace: "nowrap" }}>
                  <Link className="btn btn-primary btn-sm me-1" to={`/layanan/update/${layanan.idLayanan}`}>
                    Edit
                  </Link>
                  <button type="button" className="btn btn-danger btn-sm" onClick={() => handleDelete(layanan.idLayanan)}>
                    Delete
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
