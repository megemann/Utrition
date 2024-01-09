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

    static async fetchAllItems() {
        const response1 = await axios.get(`${BASE_ROOT}/api/Worcester`);
        const response2 = await axios.get(`${BASE_ROOT}/api/Berkshire`);
        const response3 = await axios.get(`${BASE_ROOT}/api/Hampshire`);
        const response4 = await axios.get(`${BASE_ROOT}/api/Franklin`);
        const response = [response1.data, response2.data, response3.data, response4.data];
        return (response);
    }
}

export default FoodItemAPI;