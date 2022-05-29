import axios from "axios";

export async function loginAPICall() {
  try {
    const { data, status } = await axios.post<string>("/login", {
      email: "admin@admin.com",
      password: "sheetable",
    });

    if (status != 200) {
      return false;
    }
    axios.defaults.headers.common["Authorization"] = "Bearer " + data;

    return true;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("error message: ", error.message);
      console.log(error.cause);
      return false;
    } else {
      console.log("unexpected error: ", error);
      return "An unexpected error occurred";
    }
  }
}
