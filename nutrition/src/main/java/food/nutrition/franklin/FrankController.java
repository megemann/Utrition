package food.nutrition.franklin;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/franklin")
public class FrankController {
    @Autowired
    private FrankService service;

    @GetMapping
    public ResponseEntity<List<FrankItem>> getItems() {
        return new ResponseEntity<List<FrankItem>>(service.findAllItems(), HttpStatus.OK);
    }

    @GetMapping("/{name}")
    //path variable lets framework know we want to convert path varible to string id
    public ResponseEntity<Optional<FrankItem>> getSingleItem(@PathVariable String name) {
        return new ResponseEntity<Optional<FrankItem>>(service.singleItem(name), HttpStatus.OK);
    }

    @PostMapping(
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE)
    //tells framework that whatever we get as the request body we want to create a map of key string and value string called payload
    public ResponseEntity<FrankItem> createItem(@RequestBody FrankItem newItem) {
        return new ResponseEntity<FrankItem>(service.addItem(newItem), HttpStatus.CREATED);
    }
}
