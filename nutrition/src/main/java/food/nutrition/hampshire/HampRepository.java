package food.nutrition.hampshire;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface HampRepository extends MongoRepository<HampItem, ObjectId> {
    Optional<HampItem> findByName(String name);
}
