package food.nutrition.worcester;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface WooRepository  extends MongoRepository<WooItem, ObjectId> {
    Optional<WooItem> findByName(String name);
}
