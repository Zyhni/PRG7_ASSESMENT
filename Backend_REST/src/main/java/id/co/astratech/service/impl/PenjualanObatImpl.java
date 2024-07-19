package id.co.astratech.service.impl;

import id.co.astratech.dao.PenjualanObatDao;
import id.co.astratech.model.Obat;
import id.co.astratech.model.PenjualanObat;
import id.co.astratech.repository.ObatRepository;
import id.co.astratech.repository.PenjualanObatRepository;
import id.co.astratech.response.DtoResponse;
import id.co.astratech.service.PenjualanObatService;
import id.co.astratech.vo.PenjualanObatVo;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Calendar;
import java.util.Date;
import java.util.List;

@Service
@Transactional
public class PenjualanObatImpl implements PenjualanObatService {

    @Autowired
    private PenjualanObatDao penjualanObatDao;

    @Autowired
    private PenjualanObatRepository penjualanObatRepository;

    @Autowired
    private ObatRepository obatRepository;

    @Override
    public DtoResponse getAllTransaksi() {
        List<PenjualanObatVo> data = penjualanObatDao.getAllObat();
        if(data != null){
            return new DtoResponse(200, data, "Sukses");
        }else {
            return new DtoResponse(500, null, "Error saat mengambil data");
        }
    }

    @Override
    public DtoResponse saveTransaksi(PenjualanObat penjualanObat) {
        try {
            Obat obat = obatRepository.findById(penjualanObat.getIdObat()).orElse(null);
            penjualanObat.setHargaTotal(penjualanObat.getQtyObat() * obat.getHargaObat());
            penjualanObat.setIdTransaksi(getIdTransaksi());
            penjualanObat.setTanggal(new Date());
            penjualanObatRepository.save(penjualanObat);
            obatRepository.reduceStok(penjualanObat.getIdObat(), penjualanObat.getQtyObat());

            return new DtoResponse(200, penjualanObat, "Sukses Menyimpan data");
        } catch (Exception e) {
            return new DtoResponse(500, penjualanObat, "Gagal Menyimpan Data");
        }
    }

    private Integer getIdTransaksi(){
        Integer tahunSekarang = Calendar.getInstance().get(Calendar.YEAR);
        String tahunString = String.valueOf(tahunSekarang);

        // Mendapatkan nomor urut terakhir
        String lastId = penjualanObatRepository.getLastId(tahunSekarang);
        int newIncrement = 1;

        if (lastId != null) {
            String lastIncrementStr = lastId.substring(4);
            newIncrement = Integer.parseInt(lastIncrementStr) + 1;
        }

        String newNomorTransaksi = String.format("%s%04d", tahunString, newIncrement);

        return Integer.valueOf(newNomorTransaksi);
    }

    @Override
    public DtoResponse getTotalTransaksi() {
        double total = penjualanObatDao.getTotalTransaksi();
        return new DtoResponse(200, total, "Sukses");
    }
}
