package food.nutrition.menus;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MenuService {
    @Autowired
    private MenuRepository repository;

    public List<Menu> findAllMenus() {
        return repository.findAll();
    }

    @Autowired
    private MongoTemplate mongoTemplate;

    public Menu addMenu(Menu newMenu) {

        Menu menu = new Menu(newMenu.getItemList(), newMenu.getUsername());

        Menu savedMenu = repository.save(menu);

        return savedMenu;
    }
}
