package food.nutrition.berkshire;

import food.nutrition.Item;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface BerkRepository extends MongoRepository<Item, ObjectId> {
    Optional<Item> findByName(String name);
}
