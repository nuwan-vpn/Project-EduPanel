package lk.ijse.dep11.edupanel.api;

import lk.ijse.dep11.edupanel.to.request.LecturerReqTO;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1/lecturers")
@CrossOrigin
public class LecturerHttpController {

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping(consumes = "multipart/form-data", produces = "application/json")
    public void createNewLecturer(@ModelAttribute LecturerReqTO lecturerReqTO){
        System.out.println(lecturerReqTO);
    }


    @ResponseStatus(HttpStatus.NO_CONTENT)
    @PatchMapping(value = "/{lecturer-id}", consumes = "multipart/form-data")
    public void updateLecturerDetailsviaMultipart(@PathVariable("{lecturer-id}") Integer lecturerId){}

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @PatchMapping(value = "/{lecturer-id}", consumes = "application/json")
    public void updateLecturerDetailsviaApplicationjson(@PathVariable("{lecturer-id}") Integer lecturerId){}

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("/{lecturer-id}")
    public void deleteLecturer(@PathVariable("{lecturer-id}") Integer lecturerId){}

    @GetMapping(produces = "application/json")
    public void getAllLecturers(){}

    @GetMapping(value = "/{lecturer-id}", produces = "application/json")
    public void getLecturerDetails(@PathVariable("{lecturer-id}") Integer lecturerId){}

    @GetMapping(params = "type=full-time", produces = "application/json")
    public void getFullTimeLecturers(){}

    @GetMapping(params = "type=visiting", produces = "application/json")
    public void getVisitingLecturers(){}


}
