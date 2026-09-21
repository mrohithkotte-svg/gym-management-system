/**
 * IRONFORGE FITNESS - Google Apps Script Backend
 * 
 * Instructions:
 * 1. Open your Google Sheet.
 * 2. Click Extensions > Apps Script.
 * 3. Replace all code in Code.gs with this code.
 * 4. Click 'Deploy' > 'New deployment'.
 * 5. Select type: 'Web app'.
 * 6. Set Description: 'Gym Leads API'.
 * 7. Set 'Execute as': 'Me'.
 * 8. Set 'Who has access': 'Anyone'.
 * 9. Click 'Deploy' and authorize access.
 * 10. Copy the Web App URL and paste it into config.js as googleSheetUrl.
 */

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Auto-create styled headers if sheet is empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["Timestamp", "Name", "Email", "Phone", "Fitness Goal", "Message", "Status"]);
      var headerRange = sheet.getRange(1, 1, 1, 7);
      headerRange.setFontWeight("bold");
      headerRange.setBackground("#ff3c00");
      headerRange.setFontColor("#ffffff");
    }
    
    var data = {};
    if (e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (err) {
        data = e.parameter || {};
      }
    } else if (e.parameter) {
      data = e.parameter;
    }
    
    var timestamp = data.date || new Date().toLocaleString();
    var name = data.name || "";
    var email = data.email || "";
    var phone = data.phone || "";
    var goal = data.goal || "";
    var message = data.message || "";
    var status = data.status || "New";
    
    sheet.appendRow([timestamp, name, email, phone, goal, message, status]);
    
    return ContentService.createTextOutput(JSON.stringify({
      result: "success",
      message: "Enquiry saved successfully"
    })).setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      result: "error",
      error: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var rows = sheet.getDataRange().getValues();
    
    if (rows.length <= 1) {
      return ContentService.createTextOutput(JSON.stringify({
        result: "success",
        data: []
      })).setMimeType(ContentService.MimeType.JSON);
    }
    
    var enquiries = [];
    
    for (var i = 1; i < rows.length; i++) {
      var row = rows[i];
      // Ignore completely empty rows
      if (!row[1] && !row[2] && !row[3]) continue;
      
      enquiries.push({
        id: i,
        date: row[0] ? row[0].toString() : "",
        name: row[1] ? row[1].toString() : "",
        email: row[2] ? row[2].toString() : "",
        phone: row[3] ? row[3].toString() : "",
        goal: row[4] ? row[4].toString() : "",
        message: row[5] ? row[5].toString() : "",
        status: row[6] ? row[6].toString() : "New"
      });
    }
    
    return ContentService.createTextOutput(JSON.stringify({
      result: "success",
      data: enquiries
    })).setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      result: "error",
      error: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
