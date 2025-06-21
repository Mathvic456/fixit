# Formspree Integration Setup Guide

## Overview
This project uses Formspree to handle form submissions for both the service request form and waitlist signup. Formspree is a form backend service that handles form submissions without requiring a server.

## Setup Instructions

### 1. Create a Formspree Account
1. Go to [formspree.io](https://formspree.io)
2. Sign up for a free account
3. Verify your email address

### 2. Create Forms

#### For Service Request Form:
1. In your Formspree dashboard, click "New Form"
2. Name it "Service Requests"
3. Copy the form ID (it looks like `xpzgkdqw`)
4. Replace `YOUR_FORM_ID` in `components/service-request-form.tsx` with your actual form ID

#### For Waitlist Form:
1. Create another form named "Waitlist Signups"
2. Copy the form ID
3. Replace `YOUR_WAITLIST_FORM_ID` in `app/waitlist/page.tsx` with your actual form ID

### 3. Configure Form Settings

#### Service Request Form Settings:
- **Notification Email**: Set where you want to receive service requests
- **Auto-Reply**: Enable to send confirmation emails to customers
- **Spam Protection**: Enable reCAPTCHA if needed
- **File Uploads**: Enable if you want to receive uploaded images

#### Waitlist Form Settings:
- **Notification Email**: Set where you want to receive waitlist signups
- **Auto-Reply**: Enable to send welcome emails to waitlist subscribers
- **Integrations**: Consider connecting to your email marketing tool

### 4. Form Fields

#### Service Request Form Fields:
- `name` - Customer's full name
- `email` - Customer's email address
- `phone` - Customer's phone number
- `address` - Service location
- `serviceType` - Type of service needed
- `description` - Problem description
- `preferredDate` - Preferred service date
- `preferredTime` - Preferred time slot
- `images` - Uploaded images (URLs)
- `_subject` - Email subject line

#### Waitlist Form Fields:
- `email` - Subscriber's email address
- `_subject` - Email subject line

### 5. Testing
1. Test both forms with real email addresses
2. Check that you receive notifications
3. Verify auto-reply emails are working
4. Test error handling with invalid submissions

### 6. Production Considerations
- **Rate Limiting**: Free plan has 50 submissions/month
- **Upgrade**: Consider paid plans for higher volume
- **Analytics**: Monitor form submission rates
- **Backup**: Consider alternative form handlers for redundancy

## Form Validation
Both forms include:
- Client-side validation for required fields
- Email format validation
- Error handling for failed submissions
- Loading states during submission
- Success confirmations

## Security Features
- CSRF protection (built into Formspree)
- Spam filtering options
- Rate limiting
- Email verification for notifications

## Customization Options
- Custom thank you pages
- Webhook integrations
- Email templates
- Field validation rules
- Conditional logic

## Support
- Formspree documentation: https://help.formspree.io/
- Community support: https://github.com/formspree/formspree
