import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { saveLayanan } from "../../util/LayananService";

export default function LayananCreate() {
  const navigate = useNavigate();
  const [namaLayanan, setNamaLayanan] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [harga, setHarga] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const layanan = Object.fromEntries(formData.entries());

    if (!layanan.namaLayanan || !layanan.deskripsi || !layanan.harga) {
      alert("Field Tidak boleh kosong");
      retrun;
    }

    try {
      const layanan = {
        namaLayanan,
        deskripsi,
        harga,
      };

      saveLayanan(layanan).then(() => {
        navigate("/layanan");
      });
    } catch (error) {
      alert("Tidak bisa terhubung dengan server");
    }
  }

  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-md-8 mx-auto rounded border p-4">
          <h2>Create Layanan</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3 row">
              <label className="col-sm-4 col-form-label">Nama Layanan</label>
              <div className="col-sm-8">
                <input className="form-control" type="text" name="namaLayanan" id="namaLayanan" value={namaLayanan} onChange={(e) => setNamaLayanan(e.target.value)} />
                <span className="text-danger"></span>
              </div>
            </div>

            <div className="mb-3 row">
              <label className="col-sm-4 col-form-label">Deskripsi Layanan</label>
              <div className="col-sm-8">
                <input className="form-control" type="text" name="deskripsi" id="deskripsi" value={deskripsi} onChange={(e) => setDeskripsi(e.target.value)} />
                <span className="text-danger"></span>
              </div>
            </div>

            <div className="mb-3 row">
              <label className="col-sm-4 col-form-label">Harga Layanan</label>
              <div className="col-sm-8">
                <input className="form-control" type="number" name="harga" id="harga" value={harga} onChange={(e) => setHarga(e.target.value)} />
                <span className="text-danger"></span>
              </div>
            </div>

            <div className="row">
              <div className="offset-sm-4 col-sm-4 d-grid">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
              <div className="col-sm-4 d-grid">
                <Link className="btn btn-secondary" to="/layanan" role="button">
                  Cancel
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
