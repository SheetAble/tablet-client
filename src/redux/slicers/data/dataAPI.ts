import axios, { AxiosError } from "axios";
import type { Composer, Sheet } from "./dataSlice";

type SheetResponse = {
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

type ComposerResponse = {
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

    let sheets: Sheet[] = [];
    for (let i = 0; i < data.rows.length; i++) {
      sheets.push({
        safeSheetName: data.rows[i].safe_sheet_name,
        sheetName: data.rows[i].sheet_name,
        safeComposer: data.rows[i].safe_composer,
        composer: data.rows[i].composer,
        releaseDate: data.rows[i].ReleaseDate,
        pdfUrl: data.rows[i].pdf_url,
        uploaderId: data.rows[i].uploader_id,
        createdAt: data.rows[i].created_at,
        updatedAt: data.rows[i].updated_at,
        tags: data.rows[i].tags,
        informationText: data.rows[i].information_text,
      });
    }
    return sheets;
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

    let sheets: Sheet[] = [];
    for (let i = 0; i < data.rows.length; i++) {
      sheets.push({
        safeSheetName: data.rows[i].safe_sheet_name,
        sheetName: data.rows[i].sheet_name,
        safeComposer: data.rows[i].safe_composer,
        composer: data.rows[i].composer,
        releaseDate: data.rows[i].ReleaseDate,
        pdfUrl: data.rows[i].pdf_url,
        uploaderId: data.rows[i].uploader_id,
        createdAt: data.rows[i].created_at,
        updatedAt: data.rows[i].updated_at,
        tags: data.rows[i].tags,
        informationText: data.rows[i].information_text,
      });
    }
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

    let composers: Composer[] = [];
    for (let i = 0; i < data.rows.length; i++) {
      composers.push({
        safeName: data.rows[i].safe_name,
        name: data.rows[i].name,
        portraitUrl: data.rows[i].portrait_url,
        epoch: data.rows[i].epoch,
        createdAt: data.rows[i].created_at,
        updatedAt: data.rows[i].updated_at,
      });
    }
    return composers;
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
