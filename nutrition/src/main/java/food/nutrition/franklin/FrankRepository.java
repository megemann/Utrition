package food.nutrition.franklin;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface FrankRepository extends MongoRepository<FrankItem, ObjectId> {
    Optional<FrankItem> findByName(String name);
}
