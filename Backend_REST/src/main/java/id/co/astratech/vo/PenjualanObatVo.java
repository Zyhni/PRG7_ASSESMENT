package id.co.astratech.vo;

import id.co.astratech.model.PenjualanObat;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class PenjualanObatVo {
    private Integer idTransaksi;
    private Integer idObat;
    private String namaObat;
    private Date tanggal;
    private Integer qtyObat;
    private double hargaObat;
    private double hargaTotal;

    public PenjualanObatVo(PenjualanObat penjualanObat){
        this.idTransaksi = penjualanObat.getIdTransaksi();
        this.tanggal = penjualanObat.getTanggal();
        this.idObat = penjualanObat.getIdObat();
        this.qtyObat = penjualanObat.getQtyObat();
        this.hargaTotal = penjualanObat.getHargaTotal();
    }
}
