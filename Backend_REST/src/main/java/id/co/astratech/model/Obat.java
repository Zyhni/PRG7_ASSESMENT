package id.co.astratech.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@Table(name = "msobat")
@NoArgsConstructor
@AllArgsConstructor
public class Obat {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "IdObat")
    private Integer idObat;

    @Column(name = "NamaObat")
    private String namaObat;

    @Column(name = "TipeObat")
    private Integer tipeObat;

    @Column(name = "indikasi")
    private String indikasi;

    @Column(name = "Stok")
    private Integer stok;

    @Column(name = "StokMin")
    private Integer stokMin;

    @Column(name = "HargaObat")
    private double hargaObat;

    @Column(name = "StatusObat")
    private Integer statusObat;
}
