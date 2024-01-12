package food.nutrition.menus;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;


@Getter
@Document(collection = "menus")
@Data
@AllArgsConstructor
@NoArgsConstructor

public class Menu {
    @Id
    private ObjectId id;

    public ObjectId getId() {
        return id;
    }

    private List<Item> itemList; //serving size

    public List<Item> getItemList() {
        return itemList;
    }

    private String username; //calories

    public String getUsername() {
        return username;
    }

    public Menu(List<Item> itemList, String username) {
        this.itemList = itemList;
        this.username = username;
    }
}


