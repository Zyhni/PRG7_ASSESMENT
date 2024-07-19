import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getLayananById, updateLayanan } from "../../util/LayananService";

export default function LayananUpdate() {
  const navigate = useNavigate();
  const { idLayanan } = useParams();
  const [namaLayanan, setNamaLayanan] = useState("");
  const [harga, setHarga] = useState("");

  useEffect(() => {
    getLayananById(idLayanan)
      .then((response) => {
        const layanan = response.data.data;
        setNamaLayanan(layanan.namaLayanan);
        setHarga(layanan.harga);
      })
      .catch((error) => {
        alert("Error pada saat mengambil data");
      });
  }, [idLayanan]);

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const layananUpdate = Object.fromEntries(formData.entries());

    if (!layananUpdate.namaLayanan || !layananUpdate.harga) {
      alert("Field tidak boleh kosong");
      return;
    }

    try {
      const layanan = {
        idLayanan: idLayanan,
        namaLayanan: layananUpdate.namaLayanan,
        harga: layananUpdate.harga,
      };

      updateLayanan(layanan).then(() => {
        navigate("/layanan");
      });

      console.log(layanan);
    } catch (error) {
      alert("Tidak bisa terhubung dengan server");
    }
  }

  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-md-8 mx-auto rounded border p-4">
          <h2>Update Layanan</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3 row">
              <label className="col-sm-4 col-form-label">Nama Layanan</label>
              <div className="col-sm-8">
                <input className="form-control" type="text" name="namaLayanan" id="namaLayanan" value={namaLayanan} onChange={(e) => setNamaLayanan(e.target.value)} />
                <span className="text-danger"></span>
              </div>
            </div>

            <div className="mb-3 row">
              <label className="col-sm-4 col-form-label">Harga Layanan</label>
              <div className="col-sm-8">
                <input className="form-control" type="text" name="harga" id="harga" value={harga} onChange={(e) => setHarga(e.target.value)} />
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
