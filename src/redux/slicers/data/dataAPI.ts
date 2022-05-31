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

export async function getSheetsAPICall(): Promise<Sheet[]> {
  try {
    const { data } = await axios.get<GetSheetsResponse>("/sheets");

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

export async function getComposersAPICall(): Promise<Composer[]> {
  try {
    const { data } = await axios.get<GetComposersResponse>("/composers");

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
