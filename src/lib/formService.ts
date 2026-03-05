/**
 * Form Service - Handles form submissions to Google Apps Script Backend
 * 
 * This service provides methods to submit form data to Google Sheets
 * via the Google Apps Script Web App.
 * 
 * IMPORTANT: After deploying the Apps Script, update the BASE_URL
 * in the backend/config.js file.
 */

// Google Apps Script Web App URL
// Replace this with your deployed URL after setting up the backend
const APPS_SCRIPT_URL = 'YOUR_GOOGLE_APPSCRIPT_WEB_APP_URL';

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface VolunteerFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  interestArea: string;
}

export interface NewsletterFormData {
  email: string;
}

export interface FormResponse {
  success: boolean;
  message?: string;
  error?: string;
}

/**
 * Submit contact form data to Google Sheets
 */
export async function submitContactForm(data: ContactFormData): Promise<FormResponse> {
  try {
    const response = await fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        __action: 'contact',
        ...data
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Contact form submission error:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to submit form'
    };
  }
}

/**
 * Submit volunteer form data to Google Sheets
 */
export async function submitVolunteerForm(data: VolunteerFormData): Promise<FormResponse> {
  try {
    const response = await fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        __action: 'volunteer',
        ...data
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Volunteer form submission error:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to submit form'
    };
  }
}

/**
 * Submit newsletter subscription to Google Sheets
 */
export async function submitNewsletter(data: NewsletterFormData): Promise<FormResponse> {
  try {
    const response = await fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        __action: 'newsletter',
        ...data
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to subscribe'
    };
  }
}

/**
 * Validate email format
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validate phone number (Indian format)
 */
export function isValidPhone(phone: string): boolean {
  // Accepts Indian phone numbers: +91XXXXXXXXXX or XXXXXXXXXX (10 digits)
  const phoneRegex = /^(\+91)?[6-9]\d{9}$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
}

