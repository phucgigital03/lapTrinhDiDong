// bai13 placeholder

import { getRandomNumber } from "./bai5";

export async function fetchData(){
    try {
        const response = await getRandomNumber();
        console.log("Fetch successful:", response);
    } catch (error) {
        console.error("Fetch error:", error);
    }
}
