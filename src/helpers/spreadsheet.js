import config from "../config/sheetConfig";
/**
 * Load the cars from the spreadsheet
 * Get the right values from it and assign.
 */
export function load(callback) {
  window.gapi.client.load("sheets", "v4", () => {
    window.gapi.client.sheets.spreadsheets.values
      .get({
        spreadsheetId: config.spreadsheetId,
        range: "DougScore!A4:T"
      })
      .then(
        response => {
          const data = response.result.values;
          const cars =
            data.map(car => ({
              year: car[0],
              make: car[1],
              model: car[2]
            })) || [];
          callback({
            cars
          });
        },
        response => {
          callback(false, response.result.error);
        }
      );
  });
}

export function saveData() {
  var range = "DougScore!U4:U20";
  var values = [
    ["1", "2", "3"]
    // Additional rows ...
  ];
  var body = {
    values: values
  };
  window.gapi.client.load("sheets", "v4", () => {
    window.gapi.client.sheets.spreadsheets.values
      .update({
        spreadsheetId: config.spreadsheetId,
        range: range,
        valueInputOption: "RAW",
        resource: body
      })
      .then(response => {
        var result = response.result;
        console.log(`${result.updatedCells} cells updated.`);
      });
  });
}
