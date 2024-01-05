package food.nutrition.berkshire;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BerkService {
    @Autowired
    private BerkRepository repository;

    public List<BerkItem> findAllBerkItems() {
        return repository.findAll();
    }

    public Optional<BerkItem> singleBerkItem(String name){
        return (repository.findByName(name));
    }

    @Autowired
    private MongoTemplate mongoTemplate;

    public BerkItem addBerkItem(BerkItem newItem) {

        BerkItem item = new BerkItem(newItem.getSs(), newItem.getCal(), newItem.getFg(), newItem.getSmg(), newItem.getCg(), newItem.getSg(), newItem.getPg(), newItem.getFig(), newItem.getName(), newItem.getDaysServed());

        BerkItem savedItem = repository.save(item);

        return savedItem;
    }
}
