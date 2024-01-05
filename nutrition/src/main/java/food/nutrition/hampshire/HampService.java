package food.nutrition.hampshire;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class HampService {
    @Autowired
    private HampRepository repository;

    public List<HampItem> findAllItems() {
        return repository.findAll();
    }

    public Optional<HampItem> singleItem(String name){
        return (repository.findByName(name));
    }

    @Autowired
    private MongoTemplate mongoTemplate;

    public HampItem addItem(HampItem newItem) {

        HampItem item = new HampItem(newItem.getSs(), newItem.getCal(), newItem.getFg(), newItem.getSmg(), newItem.getCg(), newItem.getSg(), newItem.getPg(), newItem.getFig(), newItem.getName(), newItem.getDaysServed());

        HampItem savedItem = repository.save(item);

        return savedItem;
    }
}
