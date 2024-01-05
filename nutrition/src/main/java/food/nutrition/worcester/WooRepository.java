package food.nutrition.worcester;

import food.nutrition.Item;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface WooRepository  extends MongoRepository<Item, ObjectId> {
    Optional<Item> findByName(String name);
}
