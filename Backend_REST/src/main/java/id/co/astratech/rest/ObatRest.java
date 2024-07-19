package id.co.astratech.rest;

import id.co.astratech.model.Obat;
import id.co.astratech.response.DtoResponse;
import id.co.astratech.service.ObatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/obat")
@CrossOrigin
public class ObatRest {
    @Autowired
    private ObatService obatService;

    public ObatRest (ObatService obatService){
        this.obatService = obatService;
    }

    @GetMapping("/getAllObat")
    public DtoResponse getAllObat(){
        return obatService.getAllObat();
    }

    @GetMapping("/getObatById/{idObat}")
    public DtoResponse getObatById(@PathVariable Integer idObat){
        return obatService.getObatById(idObat);
    }

    @PostMapping("/saveObat")
    public DtoResponse createObat(@RequestBody Obat obat){
        return obatService.saveObat(obat);
    }

    @PostMapping("/updateObat")
    public DtoResponse updateObat(@RequestBody Obat obat){
        return obatService.updateObat(obat);
    }

    @PostMapping("/updateStatus/{idObat}")
    public DtoResponse updateStatus(@PathVariable Integer idObat){
        return obatService.updateStatus(idObat);
    }

}
