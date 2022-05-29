import axios from "axios";

type Version = {
  data: string;
};

type GetSheetsResponse = {
  data: Version;
};

export async function getSheetsAPICall() {
  try {
    // 👇️ const data: GetUsersResponse
    const { data, status } = await axios.get<GetSheetsResponse>(
      "http://192.168.0.52:8080/api/sheets"
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
