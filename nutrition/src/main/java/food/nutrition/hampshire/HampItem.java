package food.nutrition.hampshire;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;


@Getter
@Document(collection = "hampshire")
@Data
@AllArgsConstructor
@NoArgsConstructor

public class HampItem {
    @Id
    private ObjectId id;

    public ObjectId getId() {
        return id;
    }

    private String ss; //serving size

    public String getSs() {
        return ss;
    }

    private Integer cal; //calories

    public Integer getCal() {
        return cal;
    }

    private Float fg; //fat grams

    public Float getFg() {
        return fg;
    }
    private Float smg; //sodium milligrams

    public Float getSmg() {
        return smg;
    }

    private Float cg; //carb grams

    public Float getCg() {
        return cg;
    }

    private Float sg; //sugar grams

    public Float getSg() {
        return sg;
    }

    private Float pg; //protein grams

    public Float getPg() {
        return pg;
    }

    private Float fig; //fiber grams

    public Float getFig() {
        return fig;
    }
    private String name;

    public String getName() {
        return name;
    }

    private List<String> daysServed;

    public List<String> getDaysServed() {
        return daysServed;
    }

    public HampItem(String ss, Integer cal, Float fg, Float smg, Float cg, Float sg, Float pg, Float fig, String name, List<String> daysServed) {
        this.ss = ss;
        this.cal = cal;
        this.fg = fg;
        this.smg = smg;
        this.cg = cg;
        this.sg = sg;
        this.pg = pg;
        this.fig = fig;
        this.name = name;
        this.daysServed = daysServed;
    }
}


