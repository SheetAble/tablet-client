import axios, { AxiosError } from "axios";
import {
  transformComposerReponse,
  transformSheetRepsonse,
} from "../../../utils/apiMethods";
import type { Composer, Sheet } from "./dataSlice";

export type SheetResponse = {
  safe_sheet_name: string;
  sheet_name: string;
  safe_composer: string;
  composer: string;
  ReleaseDate: string;
  pdf_url: string;
  uploader_id: number;
  created_at: string;
  updated_at: string;
  tags: string[];
  information_text: string;
};

type GetSheetsResponse = {
  limit: number;
  page: number;
  total_rows: number;
  total_pages: number;
  rows: SheetResponse[];
};

export type ComposerResponse = {
  safe_name: string;
  name: string;
  portrait_url: string;
  epoch: string;
  created_at: string;
  updated_at: string;
};

type GetComposersResponse = {
  rows: ComposerResponse[];
};

type getSheetsByComposerAPICallReturn = {
  sheets: Sheet[];
  composer: Composer;
};

export async function getSheetsAPICall({
  sortBy,
  page,
  limit,
  composer,
}: {
  sortBy?: string;
  page?: string;
  limit?: string;
  composer?: string;
}): Promise<Sheet[]> {
  try {
    const formData = new FormData();
    formData.append("sort_by", sortBy ? sortBy : "updated_at desc");
    formData.append("page", page ? page : "1");
    formData.append("limit", limit ? limit : "6");
    formData.append("composer", composer ? composer : "");

    const { data } = await axios.post<GetSheetsResponse>("/sheets", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return transformSheetRepsonse(data.rows);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("error message: ", error.message);
      console.log(error.cause);
      return [];
    } else {
      console.log("unexpected error: ", error);
      return [];
    }
  }
}

export async function getSheetsByComposerAPICall(
  composer: Composer
): Promise<getSheetsByComposerAPICallReturn | undefined> {
  /*
    Seperate function, because we want to give the composers through the params to redux state
  */
  try {
    const formData = new FormData();
    formData.append("sort_by", "updated_at desc");
    formData.append("page", "1");
    formData.append("limit", "1000");
    formData.append("composer", composer.safeName);

    const { data } = await axios.post<GetSheetsResponse>("/sheets", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    const sheets = transformSheetRepsonse(data.rows);
    return { sheets, composer };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("error message: ", error.message);
      console.log(error.cause);
      return undefined;
    } else {
      console.log("unexpected error: ", error);
      return undefined;
    }
  }
}

export async function getComposersAPICall({
  sortBy,
  page,
  limit,
}: {
  sortBy?: string;
  page?: string;
  limit?: string;
}): Promise<Composer[]> {
  try {
    const formData = new FormData();
    formData.append("sort_by", sortBy ? sortBy : "updated_at desc");
    formData.append("page", page ? page : "1");
    formData.append("limit", limit ? limit : "6");

    const { data } = await axios.post<GetComposersResponse>(
      "/composers",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return transformComposerReponse(data.rows);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("error message: ", error.message);
      console.log(error.cause);
      return [];
    } else {
      console.log("unexpected error: ", error);
      return [];
    }
  }
}

export async function searchSheetsAPICall(
  searchValue: string
): Promise<Sheet[]> {
  try {
    const { data } = await axios.get<SheetResponse[]>("/search/" + searchValue);

    return transformSheetRepsonse(data);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("error message: ", error.message);
      console.log(error.cause);
      return [];
    } else {
      console.log("unexpected error: ", error);
      return [];
    }
  }
}

export async function searchComposersAPICall(
  searchValue: string
): Promise<Composer[]> {
  try {
    const { data } = await axios.get<ComposerResponse[]>(
      "/search/composers/" + searchValue
    );

    return transformComposerReponse(data);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("error message: ", error.message);
      console.log(error.cause);
      return [];
    } else {
      console.log("unexpected error: ", error);
      return [];
    }
  }
}
