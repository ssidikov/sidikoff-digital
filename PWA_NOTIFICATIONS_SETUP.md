# PWA and Push Notifications Setup Guide

## Overview
The SIDIKOFF Admin Dashboard now supports Progressive Web App (PWA) features and push notifications. You can install the dashboard as a mobile app and receive instant notifications for new contact form submissions.

## Features Added

### 1. Progressive Web App (PWA)
- **Install as App**: Install the admin dashboard on your phone/desktop
- **Offline Support**: Basic functionality works offline
- **App-like Experience**: Full-screen mode, app icon, splash screen
- **Fast Loading**: Service worker caching for better performance

### 2. Push Notifications
- **Real-time Alerts**: Get notified instantly when new contact forms are submitted
- **Rich Notifications**: Show sender name and message preview
- **Action Buttons**: Quick actions to view or dismiss notifications
- **Background Notifications**: Receive notifications even when the app is closed

### 3. Enhanced Mobile UX
- **Touch Optimized**: Better touch targets and interactions
- **Swipe Gestures**: Mobile-friendly navigation
- **Safe Area Support**: Proper spacing for iPhone notches and home indicators
- **Responsive Design**: Optimized for all screen sizes

## Setup Instructions

### 1. Generate VAPID Keys
First, generate VAPID keys for push notifications:

```bash
node scripts/generate-vapid-keys.js
```

### 2. Environment Variables
Add the generated keys to your `.env.local` file:

```env
# VAPID Keys for Push Notifications
VAPID_PUBLIC_KEY=your_public_key_here
VAPID_PRIVATE_KEY=your_private_key_here
NEXT_PUBLIC_VAPID_PUBLIC_KEY=your_public_key_here

# Email for VAPID (required)
VAPID_EMAIL=your-email@example.com
```

### 3. Install on Mobile Device

#### iPhone (Safari):
1. Open the admin dashboard in Safari
2. Tap the Share button (square with arrow)
3. Scroll down and tap "Add to Home Screen"
4. Confirm the installation

#### Android (Chrome):
1. Open the admin dashboard in Chrome
2. Look for the "Add to Home Screen" banner or
3. Tap the menu (three dots) → "Add to Home screen"
4. Confirm the installation

#### Desktop (Chrome/Edge):
1. Look for the install icon in the address bar
2. Click it and follow the prompts

### 4. Enable Notifications
After installing the app:
1. Go to Settings in the admin dashboard
2. Scroll to "Notification Settings"
3. Click "Enable Notifications"
4. Allow notifications when prompted by your browser
5. Test notifications with the "Test Notification" button

## Files Added/Modified

### New Files:
- `/public/admin-manifest.json` - PWA manifest for admin app
- `/public/admin-sw.js` - Service worker for PWA functionality
- `/lib/admin-notifications.ts` - Notification manager class
- `/components/admin/NotificationSettings.tsx` - Notification settings UI
- `/components/admin/PWAInit.tsx` - PWA initialization
- `/app/api/admin/notifications/subscribe/route.ts` - Notification subscription API
- `/scripts/generate-vapid-keys.js` - VAPID key generator

### Modified Files:
- `/app/admin/(dashboard)/layout.tsx` - Added PWA metadata and initialization
- `/app/admin/(dashboard)/settings/page.tsx` - Added notification settings
- `/app/api/contact/route.ts` - Added push notification trigger
- `/app/globals.css` - Added PWA and mobile UX styles

## Usage

### For Admins:
1. **Install the App**: Follow the mobile installation steps above
2. **Enable Notifications**: Go to Settings → Notifications and enable push notifications
3. **Receive Alerts**: Get instant notifications when new contact forms are submitted
4. **Quick Access**: Use the app icon on your home screen for quick access

### Notification Types:
- **New Submission**: When someone submits a contact form
- **System Updates**: When app updates are available
- **Test Notifications**: For testing purposes

## Technical Details

### Service Worker Features:
- Caches admin pages for offline access
- Handles push notifications
- Manages app updates
- Provides background sync capabilities

### Security:
- VAPID keys ensure secure push notifications
- Admin authentication required for notification subscriptions
- Encrypted communication with push servers

### Browser Support:
- Chrome (Android/Desktop): Full support
- Safari (iOS): Full support (iOS 16.4+)
- Firefox: Full support
- Edge: Full support

## Troubleshooting

### Notifications Not Working:
1. Check browser permissions (allow notifications)
2. Verify VAPID keys are correctly set
3. Check browser console for errors
4. Try disabling/re-enabling notifications

### PWA Not Installing:
1. Ensure you're using HTTPS (required for PWA)
2. Check that manifest.json is accessible
3. Clear browser cache and try again
4. Check browser console for errors

### Offline Issues:
1. Service worker may need time to cache files
2. Clear browser cache and reload
3. Check service worker registration in browser dev tools

## Development Notes

### Testing Notifications:
```javascript
// Test notification in browser console (after enabling)
const notificationManager = AdminNotificationManager.getInstance()
await notificationManager.testNotification()
```

### Checking Service Worker:
1. Open browser dev tools
2. Go to Application tab
3. Check Service Workers section
4. Verify admin-sw.js is registered and running

### Manifest Validation:
Use Chrome Dev Tools → Application → Manifest to validate PWA configuration.

## Future Enhancements

Potential future improvements:
- Background sync for offline form submissions
- Push notification scheduling
- Advanced notification customization
- Multi-language notification support
- Notification history and management
- Integration with external notification services

## Support

For issues or questions regarding PWA and notification features:
1. Check browser console for error messages
2. Verify environment variables are set correctly
3. Test on different devices/browsers
4. Check service worker status in dev tools
