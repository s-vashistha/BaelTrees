/**
 * Backend Configuration
 * 
 * This file contains configuration for the Google Apps Script backend.
 * After deploying the Apps Script, update the BASE_URL below.
 */

const CONFIG = {
  // Replace this with your deployed Google Apps Script Web App URL
  // To get the URL:
  // 1. Open your Google Sheet
  // 2. Go to Extensions > Apps Script
  // 3. Click Deploy > New deployment
  // 4. Select "Web app"
  // 5. Set "Execute as" to "Me"
  // 6. Set "Who has access" to "Anyone"
  // 7. Click Deploy and copy the URL
  BASE_URL: 'YOUR_GOOGLE_APPSCRIPT_WEB_APP_URL',
  
  // API endpoints (appended to BASE_URL)
  ENDPOINTS: {
    CONTACT: '/exec',
    VOLUNTEER: '/exec', 
    NEWSLETTER: '/exec'
  }
};

// Export for use in frontend (will be replaced at build time)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CONFIG;
}

