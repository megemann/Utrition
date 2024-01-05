package food.nutrition;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;

@SpringBootApplication
public class NutritionApplication {

	public static void main(String[] args) {
		SpringApplication.run(NutritionApplication.class, args);
	}

	@GetMapping()
	public String apiRoot(){
		return "hello world";
	}
}
