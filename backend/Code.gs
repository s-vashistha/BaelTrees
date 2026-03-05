/**
 * BaelTrees Environmental Trust - Google Apps Script Backend
 * Handles form submissions and stores data in Google Sheets
 */

const SHEET_NAME = {
  CONTACT: 'ContactForm',
  VOLUNTEER: 'VolunteerForm',
  NEWSLETTER: 'Newsletter'
};

function getSheet(sheetName) {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = spreadsheet.getSheetByName(sheetName);
  
  if (!sheet) {
    sheet = spreadsheet.insertSheet(sheetName);
  }
  
  if (sheet.getLastRow() === 0) {
    initializeHeaders(sheetName, sheet);
  }
  
  return sheet;
}

function initializeHeaders(sheetName, sheet) {
  let headers = {
    'ContactForm': ['Timestamp', 'FullName', 'Email', 'Phone', 'Subject', 'Message'],
    'VolunteerForm': ['Timestamp', 'FirstName', 'LastName', 'Email', 'Phone', 'InterestArea'],
    'Newsletter': ['Timestamp', 'Email']
  };
  sheet.getRange(1, 1, 1, headers[sheetName].length).setValues([headers[sheetName]]);
}

function doPost(e) {
  try {
    let postData = e.postData ? JSON.parse(e.postData.contents) : e.parameter;
    let action = postData.__action;
    let sheetName, fields, data;
    
    switch (action) {
      case 'contact':
        sheetName = SHEET_NAME.CONTACT;
        fields = ['fullName', 'email', 'phone', 'subject', 'message'];
        break;
      case 'volunteer':
        sheetName = SHEET_NAME.VOLUNTEER;
        fields = ['firstName', 'lastName', 'email', 'phone', 'interestArea'];
        break;
      case 'newsletter':
        sheetName = SHEET_NAME.NEWSLETTER;
        fields = ['email'];
        break;
      default:
        return ContentService.createTextOutput(JSON.stringify({success: false, error: 'Invalid action'})).setMimeType(ContentService.MimeType.JSON);
    }
    
    const sheet = getSheet(sheetName);
    let rowData = [new Date()];
    
    for (let field of fields) {
      rowData.push(postData[field] || '');
    }
    
    sheet.getRange(sheet.getLastRow() + 1, 1, 1, rowData.length).setValues([rowData]);
    
    return ContentService.createTextOutput(JSON.stringify({success: true, message: 'Form submitted successfully!'})).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({success: false, error: error.message})).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService.createTextOutput(JSON.stringify({status: 'OK', message: 'BaelTrees Forms API is running', forms: ['contact', 'volunteer', 'newsletter']})).setMimeType(ContentService.MimeType.JSON);
}

function testConnection() {
  const sheet = getSheet(SHEET_NAME.CONTACT);
  return {success: true, sheetName: sheet.getName(), lastRow: sheet.getLastRow()};
}

