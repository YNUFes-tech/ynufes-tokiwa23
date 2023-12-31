const c = SpreadsheetApp.getActive().getSheetByName("情報入力用");

function doGet(e) {
  const sheet = c.getDataRange().getValues();

  const A = [];
  A[0] = sheet[2][1];
  A[1] = sheet[2][2];
  A[2] = sheet[2][3];
  const B = [];
  B[0] = sheet[3][1];
  B[1] = sheet[3][2];
  B[2] = sheet[3][3];
  const C = [];
  C[0] = sheet[4][1];
  C[1] = sheet[4][2];
  C[2] = sheet[4][3];
  const D = [];
  D[0] = sheet[5][1];
  D[1] = sheet[5][2];
  D[2] = sheet[5][3];
  const E = [];
  E[0] = sheet[6][1];
  E[1] = sheet[6][2];
  E[2] = sheet[6][3];
  // check validity
  if (
    !A[0] ||
    !A[1] ||
    !A[2] ||
    !B[0] ||
    !B[1] ||
    !B[2] ||
    !C[0] ||
    !C[1] ||
    !C[2] ||
    !D[0] ||
    !D[1] ||
    !D[2] ||
    !E[0] ||
    !E[1] ||
    !E[2]
  ) {
    return respond({});
  }

  // run resolveEventNum to all numbers
  for (let i = 0; i < 3; i++) {
    A[i] = resolveEventNum(A[i]);
    B[i] = resolveEventNum(B[i]);
    C[i] = resolveEventNum(C[i]);
    D[i] = resolveEventNum(D[i]);
    E[i] = resolveEventNum(E[i]);
  }
  return respond({
    FOOD: A,
    EXHIBITION: B,
    PERFORMANCE: C,
    DRINK: D,
    VISUAL: E,
    UPDATED: sheet[7][1],
  });
}

const k = SpreadsheetApp.getActive().getSheetByName("企画情報");

function resolveEventNum(kikakuNum) {
  const sheet = k.getDataRange().getValues();
  for (let i = 1; i < sheet.length; i++) {
    if (sheet[i][5] == kikakuNum) {
      return sheet[i][0];
    }
  }
  return -1;
}

function respond(data) {
  return ContentService.createTextOutput(JSON.stringify(data)).setMimeType(
    ContentService.MimeType.JSON,
  );
}
