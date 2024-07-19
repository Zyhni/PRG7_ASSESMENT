package id.co.astratech.service.impl;
import id.co.astratech.dao.ObatDao;
import id.co.astratech.model.Obat;
import id.co.astratech.repository.ObatRepository;
import id.co.astratech.response.DtoResponse;
import id.co.astratech.service.ObatService;
import id.co.astratech.vo.ObatVo;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.lang.reflect.Field;
import java.util.List;

@Service
@Transactional
public class ObatServiceImpl implements ObatService {
    @Autowired
    private ObatDao obatDao;

    @Autowired
    private ObatRepository obatRepository;

    @Override
    public DtoResponse getAllObat() {
        List<ObatVo> data = obatDao.getAllObat();
        if(data != null){
            return new DtoResponse(200, data, "Sukses");
        }else {
            return new DtoResponse(500, null, "Error saat mengambil data");
        }

    }

    @Override
    public DtoResponse getObatById(Integer idObat) {
        Obat data = obatRepository.findById(idObat).orElse(null);
        if(data != null){
            return new DtoResponse(200, data, "Sukses mengambil data");
        }else {
            return new DtoResponse(500, null, "Gagal pada saat mengambil data");
        }
    }

    @Override
    public DtoResponse saveObat(Obat obat) {
        try {
            obat.setStatusObat(1);
            obatRepository.save(obat);
            return new DtoResponse(200, obat, "Sukes Menyimpan data");
        }catch (Exception e){
            return new DtoResponse(500, obat, "Gagal Menyimpan Data");
        }
    }

    @Override
    public DtoResponse updateObat(Obat updateObat) {
        Obat obatDB = obatRepository.findById(updateObat.getIdObat()).orElse(null);
        try {
            if(obatDB != null){
                copyNonNullProperties(updateObat, obatDB);
                obatRepository.save(obatDB);
                return new DtoResponse(200, obatDB, "Sukses Mengupdate data");
            }
        } catch (Exception e) {
            return new DtoResponse(500, null, e.getMessage());
        }
        return new DtoResponse(500, null, "Terjadi Kesalahan Mengupdate Data");
    }

    @Override
    public DtoResponse updateStatus(Integer idObat) {
        Obat updateStatus = obatRepository.findById(idObat).orElse(null);
        try {
            if(updateStatus!=null){
                updateStatus.setStatusObat(0);
                obatRepository.save(updateStatus);
                return new DtoResponse(200, updateStatus, "Sukses Menonaktifkan data");
            }
        }catch (Exception e){
            return new DtoResponse(500, null, e.getMessage());
        }
        return new DtoResponse(500, null, "Terjadi Kesalahan Saat Menghapus Data");
    }

    public static void copyNonNullProperties(Object source, Object target) {
        Field[] fields = source.getClass().getDeclaredFields();
        for (Field field : fields) {
            field.setAccessible(true);
            try {
                Object value = field.get(source);
                if (value != null) {
                    field.set(target, value);
                }
            } catch (IllegalAccessException e) {
                throw new RuntimeException(e);
            }
        }
    }
}
