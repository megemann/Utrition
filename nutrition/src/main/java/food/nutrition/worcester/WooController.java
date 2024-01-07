package food.nutrition.worcester;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/Worcester")
public class WooController {
    @Autowired
    private WooService service;

    @GetMapping
    public ResponseEntity<List<WooItem>> getItems() {
        return new ResponseEntity<List<WooItem>>(service.findAllItems(), HttpStatus.OK);
    }

    @GetMapping("/{name}")
    //path variable lets framework know we want to convert path varible to string id
    public ResponseEntity<Optional<WooItem>> getSingleItem(@PathVariable String name) {
        return new ResponseEntity<Optional<WooItem>>(service.singleItem(name), HttpStatus.OK);
    }

    @PostMapping(
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE)
    //tells framework that whatever we get as the request body we want to create a map of key string and value string called payload
    public ResponseEntity<WooItem> createItem(@RequestBody WooItem newItem) {
        return new ResponseEntity<WooItem>(service.addItem(newItem), HttpStatus.CREATED);
    }
}
