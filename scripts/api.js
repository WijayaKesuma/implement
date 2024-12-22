// Nyambungin ke API
const BASE_URL = "https://todolist-api-9hye.vercel.app"

// Membuat CRUD
// READ DATA
export async function getTodos() {
    try {
        const response = await fetch(`${BASE_URL}/todos`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        });
        const result = await response.json();

        return result;
    } catch (error) {
        console.log("Error: ", error);
    }
}
// `` (backtick) = untuk menggabungkan variabel dan string