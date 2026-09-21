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

    var headers = ensureHeaders(sheet);
    
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
    var plan = data.plan || "";
    var goal = data.goal || "";
    var message = data.message || "";
    var status = data.status || "New";
    
    var row = [];
    for (var column = 0; column < headers.length; column++) {
      var header = normalizeHeader(headers[column]);
      if (header === "timestamp" || header === "date" || header === "time") row.push(timestamp);
      else if (header === "name" || header === "fullname") row.push(name);
      else if (header === "email") row.push(email);
      else if (header === "phone" || header === "mobile") row.push(phone);
      else if (header === "membershipplan" || header === "plan") row.push(plan);
      else if (header === "fitnessgoal" || header === "goal") row.push(goal);
      else if (header === "message" || header === "enquiry") row.push(message);
      else if (header === "status") row.push(status);
      else row.push("");
    }

    sheet.appendRow(row);
    
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
      var emptyResponse = {
        result: "success",
        data: []
      };
      var emptyCallback = e && e.parameter ? e.parameter.callback : "";
      if (emptyCallback && /^[A-Za-z_$][0-9A-Za-z_$]*$/.test(emptyCallback)) {
        return ContentService.createTextOutput(emptyCallback + "(" + JSON.stringify(emptyResponse) + ");")
          .setMimeType(ContentService.MimeType.JAVASCRIPT);
      }
      return ContentService.createTextOutput(JSON.stringify(emptyResponse))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    var headers = rows[0];
    var columns = {};
    for (var headerIndex = 0; headerIndex < headers.length; headerIndex++) {
      columns[normalizeHeader(headers[headerIndex])] = headerIndex;
    }

    var valueFor = function(row, names) {
      for (var nameIndex = 0; nameIndex < names.length; nameIndex++) {
        var columnIndex = columns[names[nameIndex]];
        if (columnIndex !== undefined && row[columnIndex] !== "" && row[columnIndex] !== null) {
          return row[columnIndex].toString();
        }
      }
      return "";
    };

    var enquiries = [];
    
    for (var i = 1; i < rows.length; i++) {
      var row = rows[i];
      var name = valueFor(row, ["name", "fullname"]);
      var email = valueFor(row, ["email"]);
      var phone = valueFor(row, ["phone", "mobile"]);
      var message = valueFor(row, ["message", "enquiry"]);
      if (!name && !email && !phone && !message) continue;
      
      enquiries.push({
        id: i,
        date: valueFor(row, ["timestamp", "date", "time"]),
        name: name,
        email: email,
        phone: phone,
        plan: valueFor(row, ["membershipplan", "plan"]),
        goal: valueFor(row, ["fitnessgoal", "goal"]),
        message: message,
        status: valueFor(row, ["status"]) || "New"
      });
    }
    
    var response = {
      result: "success",
      data: enquiries
    };

    // JSONP lets the dashboard read lead data when the Apps Script deployment
    // does not include CORS headers.
    var callback = e && e.parameter ? e.parameter.callback : "";
    if (callback && /^[A-Za-z_$][0-9A-Za-z_$]*$/.test(callback)) {
      return ContentService.createTextOutput(callback + "(" + JSON.stringify(response) + ");")
        .setMimeType(ContentService.MimeType.JAVASCRIPT);
    }

    return ContentService.createTextOutput(JSON.stringify(response))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      result: "error",
      error: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function normalizeHeader(value) {
  return String(value || "").toLowerCase().replace(/[^a-z0-9]/g, "");
}

function ensureHeaders(sheet) {
  if (sheet.getLastRow() === 0) {
    var initialHeaders = ["Timestamp", "Name", "Email", "Phone", "Membership Plan", "Fitness Goal", "Message", "Status"];
    sheet.appendRow(initialHeaders);
    var headerRange = sheet.getRange(1, 1, 1, initialHeaders.length);
    headerRange.setFontWeight("bold");
    headerRange.setBackground("#ff3c00");
    headerRange.setFontColor("#ffffff");
    return initialHeaders;
  }

  var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
  var hasPlan = headers.some(function(header) {
    var normalized = normalizeHeader(header);
    return normalized === "membershipplan" || normalized === "plan";
  });

  if (!hasPlan) {
    headers.push("Membership Plan");
    sheet.getRange(1, headers.length).setValue("Membership Plan");
  }

  return headers;
}
