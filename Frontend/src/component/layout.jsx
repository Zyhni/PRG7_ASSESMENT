import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white border-bottom box-shadow">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Dq App
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link text-dark" aria-current="page" to="/">
                Home
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="/jenisproduct">
                Jenis Produk
              </Link>
            </li> */}
            {/* <li className="nav-item">
              <Link className="nav-link" to="/product">
                Product
              </Link>
            </li> */}
            {/* <li className="nav-item">
              <Link className="nav-link" to="/user">
                User
              </Link>
            </li> */}
            <li className="nav-item">
              <Link className="nav-link" to="/penjualan">
                Penjualan
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/obat">
                Obat
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
