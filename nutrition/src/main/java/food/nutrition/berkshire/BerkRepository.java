package food.nutrition.berkshire;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface BerkRepository extends MongoRepository<BerkItem, ObjectId> {
    Optional<BerkItem> findByName(String name);
}
