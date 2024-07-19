package id.co.astratech.vo;

import id.co.astratech.model.Obat;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ObatVo {

    private Integer idObat;
    private String namaObat;
    private Integer tipeObat;
    private String indikasi;
    private Integer stok;
    private Integer stokMin;
    private double hargaObat;
    private Integer statusObat;

    public ObatVo (Obat obat){
        this.idObat = obat.getIdObat();
        this.namaObat = obat.getNamaObat();
        this.tipeObat = obat.getTipeObat();
        this.indikasi = obat.getIndikasi();
        this.stok = obat.getStok();
        this.stokMin = obat.getStokMin();
        this.hargaObat = obat.getHargaObat();
        this.statusObat = obat.getStatusObat();
    }
}
