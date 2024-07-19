package id.co.astratech.service;

import id.co.astratech.model.Obat;
import id.co.astratech.response.DtoResponse;

public interface ObatService {

    public DtoResponse getAllObat();

    public DtoResponse getObatById(Integer idObat);

    public DtoResponse saveObat(Obat obat);

    public DtoResponse updateStatus(Integer idObat);

    public DtoResponse updateObat(Obat obat);
}
