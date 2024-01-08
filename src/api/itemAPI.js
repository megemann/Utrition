import axios from "axios";

const BASE_ROOT = "http://localhost:8080";



class FoodItemAPI {
    static async fetchItems(diningHall) {
        const response = await axios.get(`${BASE_ROOT}/api/${diningHall}`);
        console.log(response.data);
        return response.data;
    }

    static async postItem(item, diningHall) {
        const response = await axios.post(`${BASE_ROOT}/api/${diningHall}`, item);
        console.log("posted", item);
        return response.data;
    }
}

export default FoodItemAPI;