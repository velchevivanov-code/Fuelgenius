# FuelGenius

FuelGenius is a Progressive Web App for calculating fuel consumption, estimating trip costs, and keeping a simple on-device fuel history.

## What is included in this release-ready package

- Fuel calculator and trip planner
- Local history with CSV export
- Bulgarian and English UI
- Offline-ready PWA setup
- Legal pages filled with your contact email
- Privacy choices UI for future analytics and advertising
- `release-config.js` with one place to insert provider IDs later

## Important truth about ads and analytics

This static web project is now **prepared** for analytics and ads, but they are **not active by default**.

To actually use them in production you still need to:

1. add real IDs in `release-config.js` or your Android wrapper,
2. add the relevant Android/web SDK in the final build,
3. keep optional services blocked until consent is granted,
4. update your Google Play Data safety answers to match the final build.

## Files you should edit later

- `release-config.js` → provider IDs and enable flags
- `privacy.html` → update again if you truly activate analytics or ads
- `PUBLISHING_GUIDE.md` → exact Play Console checklist

## Quick repo update

```bash
git add .
git commit -m "Prepare FuelGenius for Play release with legal pages and consent flow"
git push origin main
```

## Local run

Because the app uses a service worker, run it from a local server.

```bash
python -m http.server 8080
```

Then open `http://localhost:8080`.
