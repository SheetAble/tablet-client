import axios from "axios";
import * as SecureStore from "expo-secure-store";

export async function loginAPICall({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  try {
    const { data, status } = await axios.post<string>("/login", {
      email: email,
      password: password,
    });

    if (status != 200) {
      return false;
    }

    // Set jwt Token to secureStore
    await SecureStore.setItemAsync("jwtToken", data);
    axios.defaults.headers.common["Authorization"] = "Bearer " + data;

    return true;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("error message: ", error.message);
      console.log(error);
      return false;
    } else {
      console.log("unexpected error: ", error);
      return "An unexpected error occurred";
    }
  }
}
