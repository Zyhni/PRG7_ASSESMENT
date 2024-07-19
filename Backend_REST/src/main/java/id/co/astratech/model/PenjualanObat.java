package id.co.astratech.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@Entity
@Table(name = "trpenjualanobat")
@NoArgsConstructor
@AllArgsConstructor
public class PenjualanObat {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "IdTransaksi")
    private Integer idTransaksi;

    @Column(name = "IdObat")
    private Integer idObat;

    @Column(name = "Tanggal")
    private Date tanggal;

    @Column(name = "QtyObat")
    private Integer qtyObat;

    @Column(name = "HargaTotal")
    private double hargaTotal;
}
