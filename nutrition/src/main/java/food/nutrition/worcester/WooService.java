package food.nutrition.worcester;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class WooService {
    @Autowired
    private WooRepository repository;

    public List<WooItem> findAllItems() {
        return repository.findAll();
    }

    public Optional<WooItem> singleItem(String name){
        return (repository.findByName(name));
    }

    @Autowired
    private MongoTemplate mongoTemplate;

    public WooItem addItem(WooItem newItem) {

        WooItem item = new WooItem(newItem.getSs(), newItem.getCal(), newItem.getFg(), newItem.getSmg(), newItem.getCg(), newItem.getSg(), newItem.getPg(), newItem.getFig(), newItem.getName(), newItem.getDaysServed());

        WooItem savedItem = repository.save(item);

        return savedItem;
    }
}
