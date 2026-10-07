# React + Vite

# ASHU Electrical Solution

React and Vite corporate website with a built-in Node.js API for project inquiries.

## Requirements

- Node.js 20.19+ or 22.12+
- npm

## Development

```sh
npm install
npm run dev
```

Vite starts the API server automatically on `127.0.0.1:3001` and proxies `/api` requests to it. Open the URL printed by Vite.

## Production

```sh
npm run build
npm start
```

The production server serves the built website and API on port `3001`. Set `PORT` and `HOST` to change its bind address.

## Email delivery

Contact, consultation, and supply requests are saved to the local JSONL file and emailed to `ashutame1216@gmail.com`. The visitor's email is set as the reply-to address. Email delivery requires Gmail SMTP credentials on the server:

1. Enable 2-Step Verification on the Gmail account used to send the notifications, then create a Google App Password.
2. Copy `.env.example` to `.env` and set `SMTP_USER` to that Gmail address and `SMTP_PASS` to its App Password. Do not use the Gmail account's normal password.
3. Keep `.env` private and configure the same variables as server-side environment secrets in production hosting. Never put these values in frontend code or share them publicly.

Gmail SMTP defaults are `smtp.gmail.com`, port `465`, and secure TLS. If email credentials are missing or delivery fails, submissions are still saved locally, but the form reports that email was not delivered.

## Project location suggestions

The consultation and supply request forms can show Google Places suggestions as a visitor types a project location. Set `VITE_GOOGLE_MAPS_API_KEY` in the local `.env` file and in the frontend build environment. Enable the Places API (New) and Maps JavaScript API for the key, enable billing as required by Google, and restrict the key to the deployed website's HTTP referrers and only the required APIs. This browser key is visible to site visitors, so referrer and API restrictions are essential. Without a key, the location fields continue to accept manual input.

## Inquiry API

- `GET /api/health` checks server availability.
- `POST /api/requests/contact` saves contact-page and homepage messages.
- `POST /api/requests/consultation` saves consultation requests.
- `POST /api/requests/supply` saves material requests.

Forms submit multipart data. Optional attachments are limited to 10 MB and accepted file types are PDF, common images, Word, Excel, and CSV. Records are appended to `server/data/submissions.jsonl`; files are stored under `server/data/uploads/`. These directories are ignored by Git and must be backed up securely. The API rate-limits each client address to 12 submissions per 15 minutes.

Submissions are stored locally under `server/data/`; this is not an authenticated admin dashboard and the data directory must be backed up securely.
