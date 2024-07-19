package id.co.astratech.dao.impl;

import id.co.astratech.dao.ObatDao;
import id.co.astratech.model.Obat;
import id.co.astratech.repository.ObatRepository;
import id.co.astratech.vo.ObatVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class ObatDaoImpl implements ObatDao {

    @Autowired
    private ObatRepository obatRepository;

    @Override
    public List<ObatVo> getAllObat() {
        Iterable<Obat> obat = obatRepository.getAllObat();
        List<ObatVo> obatVos = new ArrayList<>();
        for (Obat item: obat){
            ObatVo obatVo = new ObatVo(item);
            obatVos.add(obatVo);
        }
        return obatVos;
    }
}
