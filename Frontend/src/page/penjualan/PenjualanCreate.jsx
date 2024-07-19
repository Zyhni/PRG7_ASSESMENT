import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { listObat } from "../../util/ObatService";
import { saveTransaksi } from "../../util/PenjualanService";

export default function PenjualanCreate() {
  const navigate = useNavigate();
  const [idObat, setIdObat] = useState("");
  const [qtyObat, setQtyObat] = useState(0);
  const [hargaObat, setHargaObat] = useState(0); 
  const [hargaTotal, setHargaTotal] = useState(0); 
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

  const formatCurrency = (number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(number);
  };

  const handleObatChange = (event) => {
    const selectedId = event.target.value;
    setIdObat(selectedId);
    const selectedObat = obats.find(obat => String(obat.idObat) === selectedId);
    if (selectedObat) {
      setHargaObat(selectedObat.hargaObat); // Set the price based on the selected service
      setHargaTotal(selectedObat.hargaObat * qtyObat); // Update the total based on the new price
    } else {
      setHargaObat(0);
      setHargaTotal(0);
    }
  };

  const handleQtyChange = (event) => {
    const quantity = event.target.value;
    setQtyObat(quantity);
    setHargaTotal(hargaObat * quantity); // Update the total based on the new quantity
  };

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const penjualanObat = Object.fromEntries(formData.entries());

    if (!penjualanObat.idObat || !penjualanObat.qtyObat) {
      alert("Field Tidak boleh kosong");
      return;
    }

    try {
      const penjualanObat = {
        idObat,
        qtyObat: parseInt(qtyObat),
      };

      saveTransaksi(penjualanObat).then(() => {
        navigate("/penjualan");
      });
    } catch (error) {
      alert("Tidak bisa terhubung dengan server");
    }
  }

  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-md-8 mx-auto rounded border p-4">
          <h2>Create Transaksi</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3 row">
              <label className="col-sm-4 col-form-label">Nama Obat</label>
              <div className="col-sm-8">
                <select className="form-select" name="idObat" id="idObat" value={idObat} onChange={handleObatChange}>
                  <option value="" disabled>
                    Pilih Kategori
                  </option>
                  {obats.map((obat) => (
                    <option key={obat.idObat} value={obat.idObat}>
                      {obat.namaObat}
                    </option>
                  ))}
                </select>
                <span className="text-danger"></span>
              </div>
            </div>

            <div className="mb-3 row">
              <label className="col-sm-4 col-form-label">Harga</label>
              <div className="col-sm-8">
                <input className="form-control" type="text" value={formatCurrency(hargaObat)} readOnly />
              </div>
            </div>

            <div className="mb-3 row">
              <label className="col-sm-4 col-form-label">Qty</label>
              <div className="col-sm-8">
                <input className="form-control" type="number" name="qtyObat" id="qtyObat" value={qtyObat} onChange={handleQtyChange} />
                <span className="text-danger"></span>
              </div>
            </div>

            <div className="mb-3 row">
              <label className="col-sm-4 col-form-label">Total</label>
              <div className="col-sm-8">
                <input className="form-control" type="text" value={formatCurrency(hargaTotal)} readOnly />
              </div>
            </div>

            <div className="row">
              <div className="offset-sm-4 col-sm-4 d-grid">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
              <div className="col-sm-4 d-grid">
                <Link className="btn btn-secondary" to="/penjualan" role="button">
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
