import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { saveObat } from "../../util/ObatService";

export default function ObatCreate() {
  const navigate = useNavigate();
  const [namaObat, setNamaObat] = useState("");
  const [tipeObat, setTipeObat] = useState("");
  const [indikasi, setIndikasi] = useState("");
  const [stok, setStok] = useState("");
  const [stokMin, setStokMin] = useState("");
  const [hargaObat, setHargaObat] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const obat = Object.fromEntries(formData.entries());

    if (!obat.namaObat || !obat.tipeObat || !obat.indikasi || !obat.stok) {
      alert("Field Tidak boleh kosong");
      retrun;
    }

    try {
      const obat = {
        namaObat,
        tipeObat,
        indikasi,
        stok,
        stokMin,
        hargaObat
      };

      saveObat(obat).then(() => {
        navigate("/obat");
      });
    } catch (error) {
      alert("Tidak bisa terhubung dengan server");
    }
  }

  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-md-8 mx-auto rounded border p-4">
          <h2>Create Obat</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3 row">
              <label className="col-sm-4 col-form-label">Nama Obat</label>
              <div className="col-sm-8">
                <input className="form-control" type="text" name="namaObat" id="namaObat" value={namaObat} onChange={(e) => setNamaObat(e.target.value)} />
                <span className="text-danger"></span>
              </div>
            </div>

            <div className="mb-3 row">
              <label className="col-sm-4 col-form-label">Tipe Obat</label>
              <div className="col-sm-8">
                <input className="form-control" type="text" name="tipeObat" id="tipeObat" value={tipeObat} onChange={(e) => setTipeObat(e.target.value)} />
                <span className="text-danger"></span>
              </div>
            </div>

            <div className="mb-3 row">
              <label className="col-sm-4 col-form-label">Indikasi</label>
              <div className="col-sm-8">
                <input className="form-control" type="text" name="indikasi" id="indikasi" value={indikasi} onChange={(e) => setIndikasi(e.target.value)} />
                <span className="text-danger"></span>
              </div>
            </div>

            <div className="mb-3 row">
              <label className="col-sm-4 col-form-label">stok</label>
              <div className="col-sm-8">
                <input className="form-control" type="number" name="stok" id="stok" value={stok} onChange={(e) => setStok(e.target.value)} />
                <span className="text-danger"></span>
              </div>
            </div>

            <div className="mb-3 row">
              <label className="col-sm-4 col-form-label">stok Minimal</label>
              <div className="col-sm-8">
                <input className="form-control" type="number" name="stokMin" id="stokMin" value={stokMin} onChange={(e) => setStokMin(e.target.value)} />
                <span className="text-danger"></span>
              </div>
            </div>

            <div className="mb-3 row">
              <label className="col-sm-4 col-form-label">harga Obat</label>
              <div className="col-sm-8">
                <input className="form-control" type="number" name="hargaObat" id="hargaObat" value={hargaObat} onChange={(e) => setHargaObat(e.target.value)} />
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
                <Link className="btn btn-secondary" to="/obat" role="button">
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
