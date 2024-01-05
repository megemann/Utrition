package food.nutrition.franklin;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FrankService {
    @Autowired
    private FrankRepository repository;

    public List<FrankItem> findAllItems() {
        return repository.findAll();
    }

    public Optional<FrankItem> singleItem(String name){
        return (repository.findByName(name));
    }

    @Autowired
    private MongoTemplate mongoTemplate;

    public FrankItem addItem(FrankItem newItem) {

        FrankItem item = new FrankItem(newItem.getSs(), newItem.getCal(), newItem.getFg(), newItem.getSmg(), newItem.getCg(), newItem.getSg(), newItem.getPg(), newItem.getFig(), newItem.getName(), newItem.getDaysServed());

        FrankItem savedItem = repository.save(item);

        return savedItem;
    }
}
