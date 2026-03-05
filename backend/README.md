# BaelTrees Backend - Google Apps Script

This folder contains the Google Apps Script backend for collecting form data from the BaelTrees website into Google Sheets.

## Setup Instructions

### Step 1: Create Google Sheet
1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet named "BaelTrees Form Data"
3. Rename the default sheet to "ContactForm"

### Step 2: Add Additional Sheets
Create these additional sheets (tabs) in the same spreadsheet:
- `VolunteerForm`
- `Newsletter`

### Step 3: Set Up Apps Script
1. In your Google Sheet, go to **Extensions** > **Apps Script**
2. Delete any existing code and paste the contents of `Code.gs`
3. Click the save icon (or Ctrl+S)
4. Name the project "BaelTrees Forms API"

### Step 4: Deploy as Web App
1. Click the blue **Deploy** button (top right)
2. Select **New deployment**
3. Click the gear icon next to "Select type" and choose **Web app**
4. Fill in the details:
   - **Description**: "BaelTrees Forms API v1"
   - **Execute as**: "Me" (your email)
   - **Who has access**: "Anyone" (this allows the website to submit forms without authentication)
5. Click **Deploy**
6. Copy the **Web app URL**

### Step 5: Configure Frontend
1. Open `backend/config.js`
2. Replace `YOUR_GOOGLE_APPSCRIPT_WEB_APP_URL` with your copied URL
3. Save the file

## Sheet Headers

The script will automatically create headers, but you can also manually set them:

### ContactForm (Sheet 1)
| A | B | C | D | E | F |
|---|---|---|---|---|---|
| Timestamp | FullName | Email | Phone | Subject | Message |

### VolunteerForm (Sheet 2)
| A | B | C | D | E | F |
|---|---|---|---|---|---|
| Timestamp | FirstName | LastName | Email | Phone | InterestArea |

### Newsletter (Sheet 3)
| A | B |
|---|---|
| Timestamp | Email |

## Testing

To test the backend:
1. Open Apps Script
2. Select the `doGet` function from the dropdown
3. Click the Run button (play icon)
4. Click "Select function" again and choose `testConnection`
5. Run it to verify sheet connectivity

You can also test by opening the deployed Web App URL in your browser - it should return a JSON response with status information.

## Files

- `Code.gs` - Main Apps Script code (paste this into Google Apps Script editor)
- `config.js` - Configuration file for the backend URL
- `README.md` - This file

## Troubleshooting

### CORS Issues
If you get CORS errors in the browser console:
- Make sure "Who has access" is set to "Anyone" in the deployment settings
- The script uses ContentService which should handle CORS automatically

### Data Not Appearing
- Check the Apps Script execution log (View > Executions)
- Verify the sheet names match exactly (case-sensitive)
- Make sure the Web App URL is correctly configured in `config.js`

### Form Submission Fails
- Open browser developer tools (F12) and check the Console for error messages
- Verify all required fields are being sent
- Check that the JSON is being properly formatted

