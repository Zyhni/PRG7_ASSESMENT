package id.co.astratech.dao;

import id.co.astratech.vo.PenjualanObatVo;

import java.util.List;

public interface PenjualanObatDao {
    public List<PenjualanObatVo> getAllObat();

    public String getLastId(Integer tahun);

    public double getTotalTransaksi();
}
