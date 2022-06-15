import { ComposerResponse, SheetResponse } from "../redux/slicers/data/dataAPI";
import { Composer, Sheet } from "../redux/slicers/data/dataSlice";

export function transformSheetRepsonse(resSheets: SheetResponse[]): Sheet[] {
  /* 
		Transform sheet response array into normal sheets array
	*/

  let sheets: Sheet[] = [];
  for (let i = 0; i < resSheets.length; i++) {
    sheets.push({
      safeSheetName: resSheets[i].safe_sheet_name,
      sheetName: resSheets[i].sheet_name,
      safeComposer: resSheets[i].safe_composer,
      composer: resSheets[i].composer,
      releaseDate: resSheets[i].ReleaseDate,
      pdfUrl: resSheets[i].pdf_url,
      uploaderId: resSheets[i].uploader_id,
      createdAt: resSheets[i].created_at,
      updatedAt: resSheets[i].updated_at,
      tags: resSheets[i].tags,
      informationText: resSheets[i].information_text,
    });
  }

  return sheets;
}

export function transformComposerReponse(
  resComposers: ComposerResponse[]
): Composer[] {
  /* 
		Transform composer response array into normal sheets array
	*/

  let composers: Composer[] = [];
  for (let i = 0; i < resComposers.length; i++) {
    composers.push({
      safeName: resComposers[i].safe_name,
      name: resComposers[i].name,
      portraitUrl: resComposers[i].portrait_url,
      epoch: resComposers[i].epoch,
      createdAt: resComposers[i].created_at,
      updatedAt: resComposers[i].updated_at,
    });
  }

  return composers;
}
