package lk.ijse.dep11.edupanel.to.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class LecturerReqTO implements Serializable {

    private Integer id;
    private String name;
    private String designation;
    private String qualifications;
    private LecturerType type;
    private Integer displayOrder;
    private String picture;
    private String linkedin;
}
