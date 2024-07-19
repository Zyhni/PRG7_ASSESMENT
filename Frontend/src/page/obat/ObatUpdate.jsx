import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getObatById, updateObat } from "../../util/ObatService";

export default function ObatUpdate() {
  const navigate = useNavigate();
  const { idObat } = useParams();
  const [namaObat, setNamaObat] = useState("");
  const [tipeObat, setTipeObat] = useState("");
  const [indikasi, setIndikasi] = useState("");
  const [stok, setStok] = useState("");
  const [stokMin, setStokMin] = useState("");
  const [hargaObat, setHargaObat] = useState("");

  useEffect(() => {
    getObatById(idObat)
      .then((response) => {
        const obat = response.data.data;
        setNamaObat(obat.namaObat);
        setTipeObat(obat.tipeObat);
        setIndikasi(obat.indikasi);
        setStok(obat.stok);
        setStokMin(obat.stokMin);
        setHargaObat(obat.hargaObat);
      })
      .catch((error) => {
        alert("Error pada saat mengambil data");
      });
  }, [idObat]);

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const obatUpdate = Object.fromEntries(formData.entries());

    if (!obatUpdate.namaObat || !obatUpdate.tipeObat) {
      alert("Field tidak boleh kosong");
      return;
    }

    try {
      const obat = {
        idObat: idObat,
        namaObat: obatUpdate.namaObat,
        tipeObat: obatUpdate.tipeObat,
        indikasi: obatUpdate.indikasi,
        stok: obatUpdate.stok,
        stokMin: obatUpdate.stokMin,
        hargaObat: obatUpdate.hargaObat,
      };

      updateObat(obat).then(() => {
        navigate("/obat");
      });

      console.log(obat);
    } catch (error) {
      alert("Tidak bisa terhubung dengan server");
    }
  }

  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-md-8 mx-auto rounded border p-4">
          <h2>Update Obat</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3 row">
              <label className="col-sm-4 col-form-label">Nama Obat</label>
              <div className="col-sm-8">
                <input className="form-control" type="text" name="namaObat" id="namaObat" value={namaObat} onChange={(e) => setNamaObat(e.target.value)} />
                <span className="text-danger"></span>
              </div>
            </div>

            <div className="mb-3 row">
              <label className="col-sm-4 col-form-label">tipe Obat</label>
              <div className="col-sm-8">
                <input className="form-control" type="text" name="tipeObat" id="tipeObat" value={tipeObat} onChange={(e) => setTipeObat(e.target.value)} />
                <span className="text-danger"></span>
              </div>
            </div>

            <div className="mb-3 row">
              <label className="col-sm-4 col-form-label">indikasi</label>
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
              <label className="col-sm-4 col-form-label">stok Min</label>
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
