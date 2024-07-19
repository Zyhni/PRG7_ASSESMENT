package id.co.astratech.rest;


import id.co.astratech.model.PenjualanObat;
import id.co.astratech.response.DtoResponse;
import id.co.astratech.service.PenjualanObatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/penjualan")
@CrossOrigin
public class PenjualanObatRest {
    @Autowired
    private PenjualanObatService penjualanObatService;

    public PenjualanObatRest (PenjualanObatService penjualanObatService){
        this.penjualanObatService = penjualanObatService;
    }

    @GetMapping("/getAllTransaksi")
    public DtoResponse getAllTransaksi(){
        return penjualanObatService.getAllTransaksi();
    }

//    @GetMapping("/getAllLaporanCountByIdLayanan")
//    public DtoResponse getLaporanCountByIdLayanan(){
//        return penjualanSalonService.getLaporanCountByIdLayanan();
//    }

    @GetMapping("/getTotalTransaksi")
    public DtoResponse getTotalTransaksi(){
        return penjualanObatService.getTotalTransaksi();
    }

    @PostMapping("/saveTransaksi")
    public DtoResponse saveTransaksi(@RequestBody PenjualanObat penjualanObat){
        return penjualanObatService.saveTransaksi(penjualanObat);
    }
}
