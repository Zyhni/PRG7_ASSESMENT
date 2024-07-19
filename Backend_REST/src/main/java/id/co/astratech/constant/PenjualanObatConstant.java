package id.co.astratech.constant;

public class PenjualanObatConstant {
    public static final String qGetLastId = "SELECT MAX(idTransaksi) FROM trpenjualanobat  WHERE idTransaksi LIKE CONCAT(:tahun, '%')";

}
