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
const APPS_SCRIPT_URL = 'https://script.googleusercontent.com/macros/echo?user_content_key=AY5xjrRew6f9YpI2daI_UQPzCVPNPQqxXL4uoR79bcNgMRGRsXuoTob5ZJnRy5-qDbt5G9hijWZrQMYnuAjUPKOdclHOTS3H26nBR5QHIK_7jO6uZBo1W_PpqoVlK1GDQvATdlEHnsDVShVvPgX_X9WU9C6vuAp1UxaplEJm30RwgjLkyhfTaJBc0uTO7l6-QTy63k0jWYFOX4w7eAEFHva6418P3794C_Q-aOSLZsaSUX1RgE2KfJmIXqR8cnmP3OROIBwctxRsTbV121KKszLiRLyKlhhj3g&lib=MCtQL4Te5oSqYMR8w0IFw559gxBnnBbDl';

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

// ============================================
// UPI Payment Configuration & Functions
// ============================================

// UPI Payment Configuration
const UPI_CONFIG = {
  // Your UPI Virtual Payment Address (VPA)
  // Replace with your actual UPI ID (e.g., baeltrees@sbi)
  vpa: 'BaelTrees@upi',
  // Organization name shown in UPI app
  payeeName: 'BaelTrees Environmental Trust',
  // Currency code
  currency: 'INR',
};

/**
 * Generate UPI payment deep link
 * Opens user's UPI app (GPay, PhonePe, Paytm) with pre-filled payment details
 */
export function generateUpiPaymentLink(amount: number, transactionNote: string): string {
  const { vpa, payeeName, currency } = UPI_CONFIG;
  
  // Encode parameters for URL
  const params = new URLSearchParams({
    pa: vpa,
    pn: payeeName,
    am: amount.toString(),
    cu: currency,
    tn: transactionNote.substring(0, 50), // Limit transaction note length
  });
  
  return `upi://pay?${params.toString()}`;
}

/**
 * Check if device supports UPI apps (mobile devices)
 */
export function isUpiSupported(): boolean {
  // Check if running on mobile device
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  return isMobile;
}

/**
 * Initiate UPI payment
 * Returns true if payment app was opened, false otherwise
 */
export function initiateUpiPayment(amount: number, description: string): boolean {
  const upiLink = generateUpiPaymentLink(amount, description);
  
  // Check if on mobile device
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  
  if (isMobile) {
    // On mobile, try to open UPI app
    window.location.href = upiLink;
    return true;
  } else {
    // On desktop, show QR code or alternative payment options
    return false;
  }
}

