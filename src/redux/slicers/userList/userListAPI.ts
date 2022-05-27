import axios from "axios";

type Version = {
  data: string;
};

type GetVersionResponse = {
  data: Version;
};

export async function getVersion() {
  try {
    // 👇️ const data: GetUsersResponse
    const { data, status } = await axios.get<GetVersionResponse>(
      "http://192.168.0.52:8080/api"
    );
    return data.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("error message: ", error.message);
      console.log(error.cause);
      return error.message;
    } else {
      console.log("unexpected error: ", error);
      return "An unexpected error occurred";
    }
  }
}
