package id.co.astratech.service;

import id.co.astratech.model.PenjualanObat;
import id.co.astratech.response.DtoResponse;

public interface PenjualanObatService {

    public DtoResponse getAllTransaksi();

    public DtoResponse saveTransaksi(PenjualanObat penjualanObat);

//    public DtoResponse getAllTransaksiByLayanan();
//    public DtoResponse getLaporanCountByIdLayanan();
//    public DtoResponse getAllTransaksiSum();

    public DtoResponse getTotalTransaksi();
}
