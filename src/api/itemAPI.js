import axios from "axios";

const BASE_ROOT = "http://localhost:8080";



class FoodItemAPI {
    static async postItem(item, diningHall) {
        const response = await axios.post(`${BASE_ROOT}/api/${diningHall}`, item);
        console.log("posted", item);
        return response.data;
    }
}

export default FoodItemAPI;