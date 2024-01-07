package food.nutrition.berkshire;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/Berkshire")
public class BerkController {
    @Autowired
    private BerkService service;

    @GetMapping
    public ResponseEntity<List<BerkItem>> getBerkItems() {
        return new ResponseEntity<List<BerkItem>>(service.findAllBerkItems(), HttpStatus.OK);
    }

    @GetMapping("/{name}")
    //path variable lets framework know we want to convert path varible to string id
    public ResponseEntity<Optional<BerkItem>> getSingleBerkItem(@PathVariable String name) {
        return new ResponseEntity<Optional<BerkItem>>(service.singleBerkItem(name), HttpStatus.OK);
    }

    @PostMapping(
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE)
    //tells framework that whatever we get as the request body we want to create a map of key string and value string called payload
    public ResponseEntity<BerkItem> createBerkItem(@RequestBody BerkItem newItem) {
        return new ResponseEntity<BerkItem>(service.addBerkItem(newItem), HttpStatus.CREATED);
    }
}
