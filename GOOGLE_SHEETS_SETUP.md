# Google Sheets Integration Setup Guide

Follow these simple steps to connect your Gym Website form and Admin Dashboard directly to your own Google Sheet!

---

## Step 1: Create a Google Sheet
1. Open [Google Sheets](https://sheets.google.com) and click **Blank Spreadsheet**.
2. Name your spreadsheet (e.g., `IRONFORGE Gym Enquiries`).

---

## Step 2: Open Apps Script
1. In your Google Sheet, click **Extensions** in the top menu bar.
2. Select **Apps Script**.

---

## Step 3: Paste the Script
1. Delete any default code in the editor (`Code.gs`).
2. Open `Code.gs` from your project folder, copy all code, and paste it into the Apps Script editor.
3. Click the **Save** icon (💾) or press `Ctrl + S`.

---

## Step 4: Deploy as Web App
1. Click the blue **Deploy** button at the top right -> select **New deployment**.
2. Click the gear icon (⚙️) next to *Select type* -> choose **Web app**.
3. Fill in the deployment details:
   - **Description**: `Gym Leads API`
   - **Execute as**: `Me (your email)`
   - **Who has access**: `Anyone` *(Crucial so your website form can submit data!)*
4. Click **Deploy**.
5. Click **Authorize access** if prompted, choose your Google account, click **Advanced** -> **Go to Gym Leads API (unsafe)** -> **Allow**.

---

## Step 5: Copy URL to `config.js`
1. Copy the generated **Web App URL** (looks like `https://script.google.com/macros/s/.../exec`).
2. Open `config.js` in your website code.
3. Replace the `googleSheetUrl` value with your Web App URL:
   ```javascript
   googleSheetUrl: "YOUR_COPIED_WEB_APP_URL_HERE",
   ```

---

## Features Enabled:
- **Instant Lead Collection**: Every website visitor who fills out the join form is saved as a new row in Google Sheets.
- **Live Admin Dashboard Sync**: The Admin Dashboard automatically fetches leads from Google Sheets so you can view, filter, and act on leads from any device!
- **Offline & Local Storage Fallback**: Enquiries are also saved locally so no data is ever lost even if network connection drops.
