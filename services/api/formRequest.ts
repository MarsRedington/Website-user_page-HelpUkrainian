import { IFormRequest } from "../../types/types";

export async function sendFormRequest(data: IFormRequest) {
  try {
    const response = await fetch(
      "https://lionfish-app-8goj8.ondigitalocean.app/api/mail",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}
