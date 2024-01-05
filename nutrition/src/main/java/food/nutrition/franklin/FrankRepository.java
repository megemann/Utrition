package food.nutrition.franklin;

import food.nutrition.Item;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface FrankRepository extends MongoRepository<Item, ObjectId> {
    Optional<Item> findByName(String name);
}
