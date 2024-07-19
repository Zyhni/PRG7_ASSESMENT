package id.co.astratech.dao.impl;

import id.co.astratech.dao.PenjualanObatDao;
import id.co.astratech.model.Obat;
import id.co.astratech.model.PenjualanObat;
import id.co.astratech.repository.ObatRepository;
import id.co.astratech.repository.PenjualanObatRepository;
import id.co.astratech.vo.PenjualanObatVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository("penjualanObatDaoImpl")
public class PenjualanObatImpl implements PenjualanObatDao {

    @Autowired
    private PenjualanObatRepository penjualanObatRepository;

    @Autowired
    private ObatRepository obatRepository;

    @Override
    public List<PenjualanObatVo> getAllObat() {
        Iterable<PenjualanObat> penjualanObat = penjualanObatRepository.findAll();
        List<PenjualanObatVo> penjualanObatVos = new ArrayList<>();
        for (PenjualanObat item: penjualanObat){
            PenjualanObatVo penjualanObatVo = new PenjualanObatVo(item);

            Obat obat = obatRepository.findById(penjualanObatVo.getIdObat()).orElse(null);
            penjualanObatVo.setNamaObat(obat.getNamaObat());
            penjualanObatVo.setHargaObat(obat.getHargaObat());
            penjualanObatVos.add(penjualanObatVo);
        }
        return penjualanObatVos;
    }

    @Override
    public String getLastId(Integer tahun) {
        String lastId = null;
        lastId = penjualanObatRepository.getLastId(tahun);
        return lastId;
    }
//
//    @Override
//    public List<LaporanCountLayananVo> getLaporanCountIdLayanan() {
//        String sql = PenjualanSalonConstant.qGetSumByIdLayanan;
//        List<LaporanCountLayananVo> vos = jdbcTemplate.query(sql, (resultSet, rowNum) -> {
//            LaporanCountLayananVo vo = new LaporanCountLayananVo();
//            vo.setIdLayanan(resultSet.getString("idLayanan"));
//            vo.setNamaLayanan(resultSet.getString("namaLayanan"));
//            vo.setJumlah(resultSet.getString("jumlah"));
//            vo.setTotalHarga(resultSet.getString("totalHarga"));
//            return vo;
//        });
//        return vos;
//    }

    @Override
    public double getTotalTransaksi() {
        List<PenjualanObat> penjualanObatList = penjualanObatRepository.findAll();
        double totalTransaksi = 0;
        for (PenjualanObat penjualanObat : penjualanObatList) {
            double hargaTotal = penjualanObat.getHargaTotal();
            totalTransaksi += hargaTotal;
        }
        return totalTransaksi;
    }
}
