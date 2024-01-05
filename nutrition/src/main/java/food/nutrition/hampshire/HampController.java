package food.nutrition.hampshire;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/hampshire")
public class HampController {
    @Autowired
    private HampService service;

    @GetMapping
    public ResponseEntity<List<HampItem>> getItems() {
        return new ResponseEntity<List<HampItem>>(service.findAllItems(), HttpStatus.OK);
    }

    @GetMapping("/{name}")
    //path variable lets framework know we want to convert path varible to string id
    public ResponseEntity<Optional<HampItem>> getSingleItem(@PathVariable String name) {
        return new ResponseEntity<Optional<HampItem>>(service.singleItem(name), HttpStatus.OK);
    }

    @PostMapping(
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE)
    //tells framework that whatever we get as the request body we want to create a map of key string and value string called payload
    public ResponseEntity<HampItem> createItem(@RequestBody HampItem newItem) {
        return new ResponseEntity<HampItem>(service.addItem(newItem), HttpStatus.CREATED);
    }
}
