import axios, { AxiosError } from "axios";
import type { Sheet } from "./dataSlice";

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

export async function getSheetsAPICall(): Promise<Sheet[]> {
  try {
    const { data, status } = await axios.get<GetSheetsResponse>(
      "http://192.168.0.52:8080/api/sheets"
    );

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
