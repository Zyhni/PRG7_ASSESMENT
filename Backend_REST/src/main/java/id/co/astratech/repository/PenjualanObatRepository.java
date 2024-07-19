package id.co.astratech.repository;

import id.co.astratech.model.PenjualanObat;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import static id.co.astratech.constant.PenjualanObatConstant.qGetLastId;

@Repository
public interface PenjualanObatRepository  extends JpaRepository<PenjualanObat, String> {
    @Query(value = qGetLastId, nativeQuery = true)
    public String getLastId(@Param("tahun") Integer tahun);
}
