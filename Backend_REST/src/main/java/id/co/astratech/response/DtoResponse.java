package id.co.astratech.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class DtoResponse {

    private Integer status;

    private Object data;

    private String message;

    public DtoResponse(Integer status, Object data){
        this.status = status;
        this.data = data;
    }
}
