package id.co.astratech.repository;

import id.co.astratech.model.Obat;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

import static id.co.astratech.constant.ObatConstant.qGetAllObat;

@Repository
public interface ObatRepository extends JpaRepository<Obat, Integer> {
    @Modifying
    @Query("UPDATE Obat o SET o.stok = o.stok - :qty WHERE o.idObat = :idObat")
    void reduceStok(@Param("idObat") Integer idObat, @Param("qty") Integer qty);
    @Query(value = qGetAllObat, nativeQuery = true)
    public List<Obat> getAllObat();
}
